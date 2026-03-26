<?php
/**
 * Aruba Cron Script: Update Publications from Google Scholar
 * Place this file in your root or public directory.
 * Set up a cron job in Aruba panel to call this script (PHP Instruction).
 */

// Security: Optional secret key to prevent unauthorized execution via browser
// Usage: update-publications.php?key=YOUR_SECRET
$secret_key = ""; // Set a secret string here if you want
if ($secret_key && (!isset($_GET['key']) || $_GET['key'] !== $secret_key)) {
    die("Unauthorized.");
}

$scholar_id = "HnOZ1UUAAAAJ";
$url = "https://scholar.google.com/citations?user=" . $scholar_id . "&hl=en&pagesize=100";
$json_file = __DIR__ . "/publications.json";

echo "Starting update for Scholar ID: $scholar_id\n";

// 1. Fetch HTML using cURL (more reliable than file_get_contents on shared hosting)
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
$html = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code !== 200 || !$html) {
    die("Error fetching Google Scholar page. HTTP Code: $http_code\n");
}

// 2. Parse HTML
libxml_use_internal_errors(true);
$dom = new DOMDocument();
$dom->loadHTML($html);
$xpath = new DOMXPath($dom);

$rows = $xpath->query("//tr[@class='gsc_a_tr']");
$new_publications = [];

foreach ($rows as $index => $row) {
    $title_node = $xpath->query(".//a[@class='gsc_a_at']", $row)->item(0);
    $authors_node = $xpath->query(".//div[@class='gs_gray'][1]", $row)->item(0);
    $journal_node = $xpath->query(".//div[@class='gs_gray'][2]", $row)->item(0);
    $year_node = $xpath->query(".//span[@class='gsc_a_y']", $row)->item(0);

    $title = $title_node ? trim($title_node->nodeValue) : "";
    $authors = $authors_node ? trim($authors_node->nodeValue) : "";
    $journal_raw = $journal_node ? trim($journal_node->nodeValue) : "";
    $year = $year_node ? trim($year_node->nodeValue) : "";
    
    // Basic journal cleanup
    $journal_parts = explode(",", $journal_raw);
    $journal = trim($journal_parts[0]);
    
    $scholar_link = $title_node ? "https://scholar.google.com" . $title_node->getAttribute("href") : "";

    $new_publications[] = [
        "id" => (string)($index + 1),
        "authors" => $authors,
        "title" => $title,
        "journal" => $journal,
        "year" => $year,
        "scholarLink" => $scholar_link
    ];
}

if (empty($new_publications)) {
    die("No publications found. Scraper might be blocked or HTML structure changed.\n");
}

// 3. Load existing JSON to preserve awards and DOIs
$existing_data = [];
if (file_exists($json_file)) {
    $existing_data = json_decode(file_get_contents($json_file), true) ?: [];
}

// Map existing metadata by title
$metadata = [];
foreach ($existing_data as $pub) {
    $metadata[$pub['title']] = [
        "award" => $pub['award'] ?? null,
        "doi" => $pub['doi'] ?? null
    ];
}

// Merge
foreach ($new_publications as &$pub) {
    if (isset($metadata[$pub['title']])) {
        if ($metadata[$pub['title']]['award']) $pub['award'] = $metadata[$pub['title']]['award'];
        if ($metadata[$pub['title']]['doi']) $pub['doi'] = $metadata[$pub['title']]['doi'];
    }
}

// 4. Save back to JSON
if (file_put_contents($json_file, json_encode($new_publications, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES))) {
    echo "Successfully updated " . count($new_publications) . " publications in $json_file\n";
} else {
    echo "Error writing to $json_file. Check permissions.\n";
}
