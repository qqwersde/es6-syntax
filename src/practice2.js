const inject=(items, sections)=>{
    for (let v of sections){
        const con=v.content;
        const ind=v.index;
        if(ind==0){
            items.splice(ind,0,con);
        }
        else if(ind>0){
            items.splice(ind+1,0,con);
        }
    }
    return items;
}
export { inject };
