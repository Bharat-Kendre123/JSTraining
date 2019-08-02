let obj, method;

obj = {
    x:10,
  go: function() { console.log(this.x); }
};

//obj.go();               // (1) [object Object]

 obj.go();             // (2) [object Object]
//  let x= obj.go;
//  x();

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined