import "reflect-metadata";
import { createConnection } from "typeorm";
import { PersonalChargeType } from './entity/PersonalChargeType';
import { TeamChargeType } from './entity/TeamChargeType';

createConnection().then(async connection => {
    const { manager } = connection;
    /* Create Charge Type */
    const chargeTypesMsq = [
        {
            name: '餐饮',
            realname: 'food',
            icon: '汉堡.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 1
        },
        {
            name: '果蔬',
            realname: 'vegetable',
            icon: '荔枝.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 2
        },
        {
            name: '衣服',
            realname: 'clothes',
            icon: '裙子.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 3
        },
        {
            name: '汽车',
            realname: 'car',
            icon: '奥迪.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 4
        },
        {
            name: '淘宝',
            realname: 'taobao',
            icon: '淘宝.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 5
        },
        {
            name: '超市',
            realname: 'supermarket',
            icon: '购物车.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 6
        },
        {
            name: '缴费',
            realname: 'payment',
            icon: '缴费.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 7
        },
        {
            name: '美容',
            realname: 'beautify',
            icon: '美容.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 8
        },
        {
            name: '便利店',
            realname: 'convenience',
            icon: '商店.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 9
        },
        {
            name: '交通',
            realname: 'traffic',
            icon: '行李.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 10
        },
        {
            name: '礼物',
            realname: 'gift',
            icon: '礼物.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 0,
            status: 1,
            id: 11
        },
        {
            name: '工资',
            realname: 'salary',
            icon: '工资.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1,
            id: 12
        },
        {
            name: '理财',
            realname: 'management',
            icon: '理财.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1,
            id: 13
        },
        {
            name: '礼金',
            realname: 'bonus',
            icon: '礼金.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1,
            id: 14
        },
        {
            name: '兼职',
            realname: 'concurrent',
            icon: '兼职.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1,
            id: 15
        },
        {
            name: '白嫖',
            realname: 'unearned',
            icon: '白嫖.png',
            created_type: 'default',
            created_by: 0,
            balance_type: 1,
            status: 1,
            id: 16
        }
    ]
    await Promise.all(chargeTypesMsq.map(async (item) => {
        return new Promise(async (resolve,reject)=>{
            try{
                // PersonalChargeType
                let personalChargeTypeEntity = new PersonalChargeType();
                personalChargeTypeEntity = Object.assign(personalChargeTypeEntity, item)
                await manager.save(personalChargeTypeEntity)
                // TeamChargeType
                let teamChargeTypeEntity = new TeamChargeType();
                teamChargeTypeEntity = Object.assign(teamChargeTypeEntity, {...item, team_id: 0})
                await manager.save(teamChargeTypeEntity)
                resolve('seed')
            }catch(e){
                reject(e)
            }
        })
    }))
    await connection.close();
}).catch(error => {
    console.log(error)
});