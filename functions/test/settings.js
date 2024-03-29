const delimiter = require('../lib/types/delimiter');
const crypto = require("crypto");

const email = 'user@sublin.app';
const emailSha256 = crypto.createHash('sha256').update(email).digest('hex')


const data = {
    // First we need to set up the users
    setUserSeitenstetten: `firestore().collection('users').doc('YOxqioCO5LTSEWXqnN2Gnm6obvH3').set({
        uid: 'YOxqioCO5LTSEWXqnN2Gnm6obvH3',
        email: 'user@sublin.app',
        firstName: 'User Seitenstetten',
        homeAddress: 'Waidhofner Straße 6',
        isRegistrationCompleted: true,
        isProviderCompleted: true,
        communes: ['__COU__AT__CIT__Seitenstetten', '__COU__AT__CIT__Biberbach'],
        addresses: [], 
        userType: 'user',
        secondName: '', 
        targetGroup: [],
    })`,
    setUserBiberbach: `firestore().collection('users').doc('2MGuqfYn6NVx555UpsJ08EqFqJN2').set({
        uid: '2MGuqfYn6NVx555UpsJ08EqFqJN2',
        email: 'user2@sublin.app',
        firstName: 'User2 Biberbach',
        homeAddress: 'Waidhofner Straße 6',
        isRegistrationCompleted: true,
        isProviderCompleted: true,
        communes: ['__COU__AT__CIT__Seitenstetten', '__COU__AT__CIT__Biberbach'],
        addresses: [], 
        userType: 'user',
        secondName: '', 
        targetGroup: [],
    })`,
    setUserLisecAllSeitenstetten: `firestore().collection('users').doc('KOvDYdBJ2Ba3AXGNzlK7ACswBky2').set({
        uid: 'KOvDYdBJ2Ba3AXGNzlK7ACswBky2',
        email: 'lisec@sublin.app',
        firstName: 'Lisec Seitenstetten',
        homeAddress: '',
        isRegistrationCompleted: true,
        isProviderCompleted: true,
        communes: ['seitenstetten'],
        addresses: ['user@sublin.app'],
        userType: 'sponsor',
        secondName: '',
        targetGroup: ['user@sublin.app'],
    })`,
    setUserStiftSeitenstettenSeitenstetten: `firestore().collection('users').doc('WXpz91NEodPbK6pM04V8OVgcOiu2').set({
        uid: 'WXpz91NEodPbK6pM04V8OVgcOiu2',
        email: 'stift_seitenstetten@sublin.app',
        firstName: 'Stift Seitenstetten Shuttle',
        homeAddress: '',
        isRegistrationCompleted: true,
        isProviderCompleted: true,
        communes: [],
        addresses: ['user@sublin.app'],
        userType: 'provider',
        secondName: '',
        targetGroup: [],
    })`,
    setUserTaxiSeitenstetten: `firestore().collection('users').doc('TYOFztSh4uOJpqKowJS5YqC7KSJ2').set({
        uid: 'TYOFztSh4uOJpqKowJS5YqC7KSJ2',
        email: 'taxi_seitenstetten@sublin.app',
        firstName: 'Taxi Seitenstetten',
        homeAddress: 'Waidhofner Straße 6',
        isRegistrationCompleted: true,
        isProviderCompleted: true,
        communes: [],
        addresses: [],
        userType: 'provider',
        secondName: '',
        targetGroup: [],
    })`,
    setUserSponsorAllSeitenstetten: `firestore().collection('users').doc('lKYkhwAJTDUQy0uEBHZlpcERwvX2').set({ \
        uid: 'lKYkhwAJTDUQy0uEBHZlpcERwvX2',
        email: 'sponsor_all_seitenstetten@sublin.app',
        firstName: 'Gemeinde Seitenstetten',
        homeAddress: 'Waidhofner Straße 6',
        isRegistrationCompleted: true,
        communes: [],
        addresses: [], 
        userType: 'sponsor',
        secondName: '',
        targetGroup: [],
    })`,
    setUserDasGoldBergHofgasteein: `firestore().collection('users').doc('iyE9PrL3XdVP9K8YSleS16hXTss2').set({
        uid: 'iyE9PrL3XdVP9K8YSleS16hXTss2',
        email: 'dasgoldberg@sublin.app',
        firstName: 'Das Goldberg Bad Hofgastein',
        homeAddress: 'Haltestellenweg 23, 5630 Bad Hofgastein',
        isRegistrationCompleted: true,
        isProviderCompleted: true,
        communes: ['__COU__AT__CIT__Bad Hofgastein__'],
        addresses: [], 
        userType: 'provider',
        secondName: '', 
        targetGroup: ['user@sublin.app'],
    })`,
    // Now we need to set up the providers docs for the providers
    setProviderGemeindeSeitenstetten: `firestore().collection('providers').doc('lKYkhwAJTDUQy0uEBHZlpcERwvX2').set({ 
        uid: 'lKYkhwAJTDUQy0uEBHZlpcERwvX2',
        addresses: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten'],
        inOperation: true,
        communes: ['__COU__AT__CIT__Seitenstetten',],
        operationRequested: true,
        providerName: 'Gemeinde Seitenstetten',
        providerPlan: 'all',
        providerType: 'sponsor',
        targetGroup: [],
        partners: ['TYOFztSh4uOJpqKowJS5YqC7KSJ2'],
        partnershipConfirmed: true,
        outOfWork: false,
        stations: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten${delimiter.STATION}Bahnhof St.Peter Seitenstetten${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten'],
        timeEnd: 2200,
        timeStart: 600
    })`,
    setProviderTaxiSeitenstetten: `firestore().collection('providers').doc('TYOFztSh4uOJpqKowJS5YqC7KSJ2').set({ 
        uid: 'TYOFztSh4uOJpqKowJS5YqC7KSJ2',
        addresses: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten'],
        inOperation: true,
        communes: ['__COU__AT__CIT__Seitenstetten'],
        operationRequested: true,
        providerName: 'Taxi Seitenstetten',
        providerPlan: 'all',
        providerType: 'taxi',
        targetGroup: [],
        partners: ['lKYkhwAJTDUQy0uEBHZlpcERwvX2'],
        outOfWork: false,
        stations: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten${delimiter.STATION}Bahnhof St.Peter Seitenstetten${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten'],
        timeEnd: 2200,
        timeStart: 600
    })`,
    setProviderStiftSeitenstetten: `firestore().collection('providers').doc('WXpz91NEodPbK6pM04V8OVgcOiu2').set({ 
        uid: 'WXpz91NEodPbK6pM04V8OVgcOiu2',
        addresses: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten${delimiter.STREET}Am Klosterberg${delimiter.COMPANY}Stift Seitenstetten'],
        inOperation: true,
        communes: ['__COU__AT__CIT__Seitenstetten'],
        operationRequested: true,
        providerName: 'Stift Seitenstetten',
        providerPlan: 'all',
        providerType: 'shuttle',
        targetGroup: [],
        partners: [],
        outOfWork: false,
        stations: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten${delimiter.STATION}Bahnhof St.Peter Seitenstetten${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten'],
        timeEnd: 2200,
        timeStart: 600
    })`,
    setProviderLisecEmailOnlySeitenstetten: `firestore().collection('providers').doc('KOvDYdBJ2Ba3AXGNzlK7ACswBky2').set({ 
        uid: 'KOvDYdBJ2Ba3AXGNzlK7ACswBky2',
        addresses: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten${delimiter.STREET}Peter-Lisec-Straße${delimiter.COMPANY}LISEC Austria GmbH',
        ],
        inOperation: true,
        communes: ['__COU__AT__CIT__Seitenstetten'],
        operationRequested: true,
        providerName: 'Lisec Seitenstetten',
        providerPlan: 'emailOnly',
        providerType: 'sponsorShuttle',
        targetGroup: ['${emailSha256}'],
        partners: ['TYOFztSh4uOJpqKowJS5YqC7KSJ2'],
        partnershipConfirmed: true,
        outOfWork: false,
        stations: ['${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten${delimiter.STATION}Bahnhof St.Peter Seitenstetten${delimiter.COUNTRY}AT${delimiter.CITY}Seitenstetten'],
        timeEnd: 2200,
        timeStart: 600
    })`,
    setProviderDasGoldbergHofgastein: `firestore().collection('providers').doc('iyE9PrL3XdVP9K8YSleS16hXTss2').set({ 
        uid: 'iyE9PrL3XdVP9K8YSleS16hXTss2',
        addresses: ['__COU__AT__CIT__Bad Hofgastein__STR__Haltestellenweg__COM__DAS.GOLDBERG'],
        inOperation: true,
        communes: ['__COU__AT__CIT__Bad Hofgastein'],
        operationRequested: true,
        providerName: 'Das Goldberg',
        providerPlan: 'emailOnly',
        providerType: 'shuttle',
        targetGroup: ['${emailSha256}'],
        partners: [],
        outOfWork: false,
        stations: ['${delimiter.COUNTRY}AT${delimiter.CITY}Bad Hofgastein${delimiter.STATION}Bahnhof Bad Hofgastein${delimiter.COUNTRY}AT${delimiter.CITY}Bad Hofgastein'],
        timeEnd: 2200,
        timeStart: 600
    })`,

}

exports.data = data;