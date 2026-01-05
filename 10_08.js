let apple = {
    name: "りんご",
    color: "赤",
    weight: 150
  };
  
  let orange = {
    name: "みかん",
    color: "オレンジ",
    weight: 100
  };
  
  let grape = {
    name: "ぶどう",
    color: "紫",
    weight: 200
  };

  let fruits = [apple , orange , grape];

  let totalweight = 0;

  for (let i = 0; i < fruits.length; i ++){
    totalweight += fruits[i] . weight;
  }
  console.log(totalweight);

  totalweight = 0;
  
  fruits.forEach(e => {
    totalweight += e.weight;
  })

  console.log(totalweight);