// you need to run this with the --allow-read flag
// to know more:
let filePath = "./text.txt";
let file = await Deno.open(filePath);
await Deno.copy(Deno.stdout, file);
file.close();
