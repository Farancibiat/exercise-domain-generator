let m1=['A','B','C','D','E','F'];
let m2=['a','b','c','d','e','f'];
let m3=['0','1','2','3','4','5'];
let doms=['.com','.net','.org','info','.biz'];

// resuelve el trabajo utilizando forEach
m1.forEach((a)=>{
    m2.forEach((b)=>{
        m3.forEach((c)=>{
            doms.forEach((d)=>{
                console.log('www.'+a+b+c+d);
            });

        });
    });
});


// Resuelve el trabajo utilizando for
for (let a = 0; a < m1.length; a++) {
    for (let b = 0; b < m2.length; b++) {
        for (let c = 0; c < m3.length; c++) {
            for (let d = 0; d < doms.length; d++) {
                console.log('www.'+m1[a]+m2[b]+m3[c]+doms[d]);
            }
        }
    
    }
    
}
