import SQLite from 'react-native-sqlite-storage';


const db = SQLite.openDatabase(
    {name: 'my.db', 
    location: 'default'
   } ,
 ()=>console.log('dataBase was success' ),
  ()=>console.log('cannot connect dataBase')
  );
  

export const insertBarber = ( ...params )=>{
    console.log(params);
    db.transaction((tx)=>{
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS barbers (
                barberId INTEGER PRIMARY KEY AUTOINCREMENT ,
                email varchar(255) ,
                password varchar(255),
                adress varchar(255)

                    );`
        )
    });
    db.transaction((tx)=>{
        tx.executeSql(
            `INSERT INTO  barbers (email , password , adress)  VALUES ( ?,?,? );`,
            params,
            (tx,res) => {
             console.log('insert was good'); 
            } , (err)=>{console.log(err); }
        )
    });
     
};

export const insertAppoinment = ( ...params )=>{
    console.log(params);
    db.transaction((tx)=>{
       
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS appoinments (
                appoinmentId INTEGER PRIMARY KEY AUTOINCREMENT ,
                emailClt varchar(255) ,
                date varchar(255),
                barberId varchar(255),
                FOREIGN KEY (barberId) REFERENCES barbers(barberId)
               
                    );`
        )
    });
     db.executeSql('PRAGMA foreign_keys = ON');
    db.transaction((tx)=>{
        tx.executeSql(
            `INSERT INTO  appoinments (emailClt , date , barberId)  VALUES ( ?,?,? );`,
            params,
            (tx,res) => {
             console.log('insert was good'); 
            } , (err)=>{console.log(err); }
        )
    });
     
};

export  const getAll =  (table,callBack)=>{
    
    const tab = [];

    db.transaction((tx)=>{
        tx.executeSql(
            `SELECT * FROM ${table};`,
            [],
            (tx,results) => {
                
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i); 
                    tab.push(row);
           
          }
          callBack(tab);
  
            }
        )
    }); 
   
   
    
};


export const dropDatabase= (table)=>{
    db.transaction((tx)=>{
        tx.executeSql(
            `drop table ${table};`,
            [],
            (tx,results) => {
           console.log('database dropped');

            }
        )
    });
};

// const saveShopsBD = ()=>{
   
//     const db = SQLite.openDatabase(
//         {name: 'my.db', 
//         location: 'default'
//        } ,
//      ()=>console.log('dataBase was success' ),
//       ()=>console.log('cannot connect dataBase')
//       );
   
//        db.transaction((tx)=>{
//            tx.executeSql(
//                "CREATE TABLE IF NOT EXISTS users ( userId int  AUTO_INCREMENT   PRIMARY KEY , email varchar(255) , password varchar(255) );"
//            )
//        });
//        db.transaction((tx)=>{
//         tx.executeSql(
//             "INSERT INTO users (userId , email,password) VALUES (0 , 'hakam','123');",
//             [],
//             (tx,res) => {
//              console.log('user was inserted'); 
//             } , (err)=>{console.log(err);}
//         )
//     });
    
//        db.transaction((tx)=>{
//            tx.executeSql(
//                "SELECT * FROM users;",
//                [],
//                (tx,results) => {
//                 var len = results.rows.length;
//             for (let i = 0; i < len; i++) {
//                 let row = results.rows.item(i);
//              console.log(`id: ${row.userId} user: ${row.email}, password: ${row.password}`);
//       }

//                }
//            )
//        });


//        db.transaction((tx)=>{
//         tx.executeSql(
//             "drop table users;",
//             [],
//             (tx,results) => {
//            console.log('database dropped');

//             }
//         )
//     });

// };