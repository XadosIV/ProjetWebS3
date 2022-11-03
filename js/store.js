function store(dic){
    tr={};
    for(u in dic){
        tr[u]=dic[u];
    }
    tr.id=tr.id+"_"+tr.idNbr;
    clones.push(tr);
}