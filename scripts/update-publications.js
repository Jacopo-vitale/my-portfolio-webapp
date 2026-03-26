import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=HnOZ1UUAAAAJ&hl=en&pagesize=100';
const JSON_PATH = 'public/publications.json';

async function updatePublications() {
  try {
    console.log('Fetching Google Scholar profile...');
    const response = await fetch(SCHOLAR_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // 2. Parse the publication rows
    const rows = Array.from(doc.querySelectorAll('.gsc_a_tr'));
    const newPublications = rows.map((row, index) => {
      const titleLink = row.querySelector('.gsc_a_at');
      const title = titleLink ? titleLink.textContent.trim() : '';
      const authors = row.querySelector('.gs_gray:nth-of-type(1)')?.textContent.trim() || '';
      const journalAndMore = row.querySelector('.gs_gray:nth-of-type(2)')?.textContent.trim() || '';
      const year = row.querySelector('.gsc_a_y')?.textContent.trim() || '';
      
      // Basic heuristic for journal extraction
      const journal = journalAndMore.split(',')[0].trim();
      
      // Link to scholar detail page
      const scholarLink = titleLink ? 'https://scholar.google.com' + titleLink.getAttribute('href') : '';

      return {
        id: (index + 1).toString(),
        authors,
        title,
        journal,
        year,
        scholarLink
      };
    });

    if (newPublications.length === 0) {
      console.warn('No publications found.');
      return;
    }

    // 3. Read current JSON to preserve awards and DOIs
    const metadata = {};
    if (fs.existsSync(JSON_PATH)) {
      const existingJson = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
      existingJson.forEach(pub => {
        metadata[pub.title] = { award: pub.award, doi: pub.doi };
      });
    }

    // Merge metadata
    const jsonPubs = newPublications.map(pub => {
      const meta = metadata[pub.title];
      if (meta) {
        if (meta.award) pub.award = meta.award;
        if (meta.doi) pub.doi = meta.doi;
      }
      return pub;
    });

    // 4. Save to JSON
    fs.writeFileSync(JSON_PATH, JSON.stringify(jsonPubs, null, 2));
    console.log(`Successfully updated ${jsonPubs.length} publications in ${JSON_PATH}.`);

  } catch (error) {
    console.error('Error updating publications:', error);
    process.exit(1);
  }
}

updatePublications();
