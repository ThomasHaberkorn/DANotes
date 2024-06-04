import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-97b56","appId":"1:1055768746785:web:176907e237d855a1aa3c60","storageBucket":"danotes-97b56.appspot.com","apiKey":"AIzaSyDqB-s6ss4tvUiEJwE2yFCIOWs3oBvx8hA","authDomain":"danotes-97b56.firebaseapp.com","messagingSenderId":"1055768746785"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
