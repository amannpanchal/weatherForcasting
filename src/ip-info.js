// api/ip-info.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('http://ip-api.com/json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
