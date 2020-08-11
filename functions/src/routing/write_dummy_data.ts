import * as admin from 'firebase-admin';
import { COMPANY, NUMBER, STREET, CITY, COUNTRY, STATION } from '../types/delimiter';

export async function writeDummyData(): Promise<void> {
    try {
        const user = 'testuser';
        const taxi = 'taxi';
        const ownShuttle = 'ownShuttle';
        const taxiShuttle = 'taxiShuttle';
        const isFilledWithDummyData = await admin.firestore().collection('providers').doc(taxi).get().then((data) => {
            return data.data();
        });
        if (!isFilledWithDummyData) {


            await admin.firestore().collection('providers').doc(taxiShuttle).set({
                addresses: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STREET + 'Peter-Lisec-Straße' + COMPANY + 'LISEC Austria GmbH'],
                inOperation: true,
                operationRequested: true,
                providerName: 'Lisec',
                providerPlan: 'emailOnly',
                providerType: taxiShuttle,
                targetGroup: ['andreas@simpledesign.io'],
                partners: ['taxi'],
                outOfWork: false,
                stations: [],
                timeEnd: 2200,
                timeStart: 600
            });
            await admin.firestore().collection('providers').doc(taxiShuttle).set({
                addresses: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STREET + 'Peter-Lisec-Straße' + COMPANY + 'LISEC Austria GmbH'],
                inOperation: true,
                operationRequested: true,
                providerName: 'Lisec',
                providerPlan: 'emailOnly',
                providerType: taxiShuttle,
                targetGroup: ['andreas@simpledesign.io'],
                partners: ['taxi'],
                outOfWork: false,
                stations: [],
                timeEnd: 2200,
                timeStart: 600
            });
            await admin.firestore().collection('providers').doc(taxi).set({
                addresses: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STREET + 'Waidhofner Straße' + NUMBER + '6',
                COUNTRY + 'AT' + CITY + 'Seitenstetten' + STREET + 'Waidhofner Straße',
                COUNTRY + 'AT' + CITY + 'Seitenstetten'
                ],
                inOperation: true,
                operationRequested: true,
                providerName: 'Taxi Raab',
                providerPlan: 'all',
                providerType: taxi,
                targetGroup: [],
                partners: [],
                outOfWork: false,
                stations: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STATION + 'Bahnhof St.Peter Seitenstetten'],
                timeEnd: 2200,
                timeStart: 600
            });
            await admin.firestore().collection('providers').doc(ownShuttle).set({
                addresses: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STREET + 'Am Klosterberg' + COMPANY + 'Stift Seitenstetten'],
                inOperation: true,
                operationRequested: true,
                providerName: 'Stift Seitenstetten',
                providerPlan: 'all',
                providerType: ownShuttle,
                targetGroup: [],
                partners: [],
                outOfWork: false,
                stations: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STATION + 'Bahnhof St.Peter Seitenstetten'],
                timeEnd: 2200,
                timeStart: 600
            });
            await admin.firestore().collection('providers').doc(ownShuttle + 'Hausmening').set({
                addresses: [COUNTRY + 'AT' + CITY + 'Hausmening' + STREET + 'Bahnhofstraße' + COMPANY + 'LISEC Holding GmbH'],
                inOperation: true,
                operationRequested: true,
                providerName: 'Lisec Hausmening',
                providerPlan: 'emailOnly',
                providerType: ownShuttle,
                targetGroup: ['andreas@simpledesign.io'],
                partners: [],
                outOfWork: false,
                stations: [COUNTRY + 'AT' + CITY + 'Seitenstetten' + STATION + 'Bahnhof St.Peter Seitenstetten'],
                timeEnd: 2200,
                timeStart: 600
            });
            await admin.firestore().collection('users').doc(user + 'toLisec').set({
                email: 'andreas@simpledesign.io',
                firstName: 'Andreas',
                homeAddress: 'Viktorgasse',
                isProfileComplete: false,
                isProvider: true,
                requestedAddresses: [],
                secondNmae: '',
            });
            await admin.firestore().collection('users').doc(user + 'toLisecWrongTargetGroup').set({
                email: 'wrong@simpledesign.io',
                firstName: 'Andreas',
                homeAddress: 'Viktorgasse',
                isProfileComplete: false,
                isProvider: true,
                requestedAddresses: [],
                secondNmae: '',
            });
            await admin.firestore().collection('users').doc(user + 'toLisecHausmeningWrongTargetGroup').set({
                email: 'wrong@simpledesign.io',
                firstName: 'Andreas',
                homeAddress: 'Viktorgasse',
                isProfileComplete: false,
                isProvider: true,
                requestedAddresses: [],
                secondNmae: '',
            });
            await admin.firestore().collection('users').doc(user + 'toLisecHausmeningRightTargetGroup').set({
                email: 'andreas@simpledesign.io',
                firstName: 'Andreas',
                homeAddress: 'Viktorgasse',
                isProfileComplete: false,
                isProvider: true,
                requestedAddresses: [],
                secondNmae: '',
            });
            await admin.firestore().collection('users').doc(user + 'toStift').set({
                email: 'andreas@simpledesign.io',
                firstName: 'Andreas',
                homeAddress: 'Viktorgasse',
                isProfileComplete: false,
                isProvider: true,
                requestedAddresses: [],
                secondNmae: '',
            });
            await admin.firestore().collection('users').doc(user + 'toWaidhofnerStrasse6').set({
                email: 'andreas@simpledesign.io',
                firstName: 'Andreas',
                homeAddress: 'Viktorgasse',
                isProfileComplete: false,
                isProvider: true,
                requestedAddresses: [],
                secondNmae: '',
            });
            await admin.firestore().collection('requests').doc(user + 'toLisec').set({
                startId: 'ChIJRQJUCdapbUcRIwZCXrOBLow',
                startAddress: '__COU__AT__CIT__Wien__STR__Viktorgasse__NUM__24',
                endId: 'ChIJL2dh39E0ckcRJrcj74AXr_k',
                endAddress: '__COU__AT__CIT__Seitenstetten__STR__Peter-Lisec-Straße__COM__LISEC Austria GmbH',
            });
            await admin.firestore().collection('requests').doc(user + 'toLisecWrongTargetGroup').set({
                startId: 'ChIJRQJUCdapbUcRIwZCXrOBLow',
                startAddress: '__COU__AT__CIT__Wien__STR__Viktorgasse__NUM__24',
                endId: 'ChIJL2dh39E0ckcRJrcj74AXr_k',
                endAddress: '__COU__AT__CIT__Seitenstetten__STR__Peter-Lisec-Straße__COM__LISEC Austria GmbH',
            });
            await admin.firestore().collection('requests').doc(user + 'toLisecHausmeningWrongTargetGroup').set({
                startId: 'ChIJRQJUCdapbUcRIwZCXrOBLow',
                startAddress: '__COU__AT__CIT__Wien__STR__Viktorgasse__NUM__24',
                endId: 'ChIJw0ZgRy82ckcRk_YVQ3OVkvI',
                endAddress: '__COU__AT__CIT__Hausmening__STR__Bahnhofstraße__COM__LISEC Holding GmbH',
            });
            await admin.firestore().collection('requests').doc(user + 'toLisecHausmeningRightTargetGroup').set({
                startId: 'ChIJRQJUCdapbUcRIwZCXrOBLow',
                startAddress: '__COU__AT__CIT__Wien__STR__Viktorgasse__NUM__24',
                endId: 'ChIJw0ZgRy82ckcRk_YVQ3OVkvI',
                endAddress: '__COU__AT__CIT__Hausmening__STR__Bahnhofstraße__COM__LISEC Holding GmbH',
            });
            await admin.firestore().collection('requests').doc(user + 'toStift').set({
                startId: 'ChIJRQJUCdapbUcRIwZCXrOBLow',
                startAddress: '__COU__AT__CIT__Wien__STR__Viktorgasse__NUM__24',
                endId: 'ChIJZVPm8bk0ckcRfFWwE8ZENzY',
                endAddress: '__COU__AT__CIT__Seitenstetten__STR__Am Klosterberg__COM__Stift Seitenstetten',
            });
            await admin.firestore().collection('requests').doc(user + 'toWaidhofnerStrasse6').set({
                startId: 'ChIJRQJUCdapbUcRIwZCXrOBLow',
                startAddress: '__COU__AT__CIT__Wien__STR__Viktorgasse__NUM__24',
                endId: 'ChIJk52Sx7A0ckcR1syxXIdjlUU',
                endAddress: '__COU__AT__CIT__Seitenstetten__STR__Waidhofner Str.__NUM__6',
            });
        }
    } catch (e) {
        console.log(e);
    }
}