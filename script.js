async function downloadVideo() {
    const videoUrl = document.getElementById('urlInput').value; // मान लीजिए आपके इनपुट बॉक्स की ID 'urlInput' है
    const backendUrl = "https://indrajeet-video-downloader.onrender.com/download";

    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: videoUrl })
        });
        
        const data = await response.json();
        if (data.success) {
            alert("Download shuru ho gaya!");
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server se connect nahi ho paya.");
    }
}