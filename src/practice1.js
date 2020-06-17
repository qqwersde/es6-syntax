const parseData = function (input) {
    let {data,column}=input;
    const array=[];
    const result = data.map((v)=>{

      const obj = {};
      column.forEach((b,index)=>{
        obj[b.name] = v[index]
      })
      array.push(obj);
    });


    /*for(let v of data){

    const obj = {};
    column.forEach((b,index)=>{
      obj[b.name] = v[index]
    })
      array.push(obj);
     }*/

    /*for(let v of data){

        const obj={};
        for (let [index, elem] of column.entries()) {
            obj[elem.name]=v[index]
        }
        array.push(obj);
    }*/
    return array;
}

export { parseData };
