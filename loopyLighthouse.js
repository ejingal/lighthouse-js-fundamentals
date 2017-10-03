/*for (var i = 100; i <= 200; i += 1)
  if (i % 12 === 0)
    console.log("LoopyLighthouse");
  else if (i % 3 === 0)
    console.log("Loopy");
  else if (i % 4 === 0)
    console.log("Lighthouse");
  else
    console.log(i);
  */


// DRY version

for (var i = 100; i <= 200; i += 1){
  var lo = i % 3 == 0, li = i % 5 == 0;
  console.log(lo ? li ? "LoopyLighthouse" : "Loopy" : li ? "Lighthouse" : i);
}
