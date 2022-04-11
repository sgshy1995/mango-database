import "reflect-metadata";
import { createConnection } from "typeorm";
import { ChargeType } from './entity/ChargeType';

createConnection().then(async connection => {
    const { manager } = connection;
    /* Create Charge Type */
    const chargeTypesMsq = [
        {
            name: 'food',
            icon: '餐饮.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'vegetable',
            icon: '果蔬.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'clothes',
            icon: '衣服.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'car',
            icon: '汽车.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'taobao',
            icon: '淘宝.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'supermarket',
            icon: '超市.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'payment',
            icon: '缴费.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'beautify',
            icon: '美容.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'convenience',
            icon: '便利店.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'traffic',
            icon: '交通.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'gift',
            icon: '礼物.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'spend_others',
            icon: '其他.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1
        },
        {
            name: 'salary',
            icon: '工资.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1
        },
        {
            name: 'management',
            icon: '理财.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1
        },
        {
            name: 'bonus',
            icon: '礼金.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1
        },
        {
            name: 'concurrent',
            icon: '兼职.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1
        },
        {
            name: 'unearned',
            icon: '白嫖.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1
        },
        {
            name: 'income_others',
            icon: '其他.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1
        }
    ]
    await Promise.all(chargeTypesMsq.map(async (item) => {
        return new Promise(async (resolve,reject)=>{
            try{
                let chargeTypeEntity = new ChargeType();
                chargeTypeEntity = Object.assign(chargeTypeEntity, item)
                await manager.save(chargeTypeEntity)
                resolve(chargeTypeEntity)
            }catch(e){
                reject(e)
            }
        })
    }))
    await connection.close();
}).catch(error => {
    console.log(error)
});