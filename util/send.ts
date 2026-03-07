export default async function send(webhookURL: string, body: object) {
    try {
        const res = await fetch(`${webhookURL}?with_components=true`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Failed to send webhook: (${res.status}) ${text}`);
        };

        console.log('Webhook sent successfully');
    } catch (err) {
        throw new Error(`Error sending webhook: ${err}`);
    };
};