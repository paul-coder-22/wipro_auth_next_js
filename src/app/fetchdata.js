// pages/api/fetch-data.js
export default async function handler(req, res) {
    const demotoken = 'demotoken'

    try {
        const response = await fetch("https://api.lab45.ai/v1.1/skills/completion/query", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${demotoken}`,
            },
            body: {
                "messages": [
                    {
                        "content": "You know bill gates",
                        "role": "user"
                    }
                ]
            }

        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



