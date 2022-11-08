// function that stores the cloned elements in clones
function store(dic){
    tr={};
    for(u in dic){
        tr[u]=dic[u];// copy data of cloned item
    }
    tr.id=tr.id+"_"+tr.idNbr;// put id of current clone
    clones.push(tr);// append elements to clones
}