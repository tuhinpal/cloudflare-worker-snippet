addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

    var pathUrl = new URL(request.url).pathname

    if (pathUrl == "/") {
        return Response.redirect("https://github.com/cachecleanerjeet/cloudflare-worker-snippet", 301)
    } else {

        try {

            var mainFetch = await fetch(`https:/${pathUrl}`)
            var mainFetch = await mainFetch.text()
            return new Response(mainFetch, {
                status: 200,
                headers: ({
                    "Content-Type": "text/vtt",
                    "Access-Control-Allow-Origin": "*",
                })
            })
        } catch (err) {
            return new Response("That's an Error", {
                status: 200,
                headers: ({
                    "Content-Type": "text/html",
                    "Access-Control-Allow-Origin": "*",
                })
            })
        }
    }
}