function dbSetup(){
    function initdb(buffer){
        db = new sqlite3.oo1.DB();
        sqlite3.capi.sqlite3_deserialize(
            db.pointer, 'main',
            sqlite3.wasm.allocFromTypedArray(buffer),
            buffer.byteLength,
            buffer.byteLength,
            sqlite3.capi.SQLITE_DESERIALIZE_FREEONCLOSE
        );
        if(!dbLoaded){
            dbLoaded = true;
            dispatchEvent(new CustomEvent('db-init'));
        }
        else{
            dispatchEvent(new CustomEvent('db-update'));
        }
    };
    fetch("samples.sqlite")
        .then(res => res.arrayBuffer())
        .then(buffer => {initdb(buffer)})
};

sqlite3InitModule().then(function(sqlite3){
    window.sqlite3 = sqlite3;
    dbSetup();
});
function dbSetup(){
    function initdb(buffer){
        db = new sqlite3.oo1.DB();
        sqlite3.capi.sqlite3_deserialize(
            db.pointer, 'main',
            sqlite3.wasm.allocFromTypedArray(buffer),
            buffer.byteLength,
            buffer.byteLength,
            sqlite3.capi.SQLITE_DESERIALIZE_FREEONCLOSE
        );
        if(!dbLoaded){
            dbLoaded = true;
            dispatchEvent(new CustomEvent('db-init'));
        }
        else{
            dispatchEvent(new CustomEvent('db-update'));
        }
    };
    fetch("https://data.destruct.dev/db/samples.sqlite")
        .then(res => res.arrayBuffer())
        .then(buffer => {initdb(buffer)})
};

sqlite3InitModule().then(function(sqlite3){
    window.sqlite3 = sqlite3;
    dbSetup();
});
