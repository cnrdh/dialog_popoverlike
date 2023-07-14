const demo = async () => {
  const html = await Deno.readTextFile("./demo.html");
  return new Response(html, { headers: [["content-type", "text/html; charset=utf-8"]] });
};

Deno.serve(demo);
