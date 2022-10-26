// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';

// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';



// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';



// export const firebaseConfig={
//   apiKey: "AIzaSyCQffU0fW-jdRd_b1Eqm8W2vkSukffJ988",
//   authDomain: "ionic-app-master.firebaseapp.com",
//   projectId: "ionic-app-master",
//   storageBucket: "ionic-app-master.appspot.com",
//   messagingSenderId: "105111909806",
//   appId: "1:105111909806:web:26bb1cfda1e95c0f34443f",
//   measurementId: "G-6XYKV6EQY8"



// }


// ;


// @NgModule({
//   declarations: [AppComponent],
//   entryComponents:[],
//   imports: [

//     BrowserModule,
//     IonicModule.forRoot(),
//     AppRoutingModule,
//     AngularFireModule.initializeApp(firebaseConfig),
//     AngularFireDatabaseModule,
//     AngularFireAuthModule,
//     AngularFireStorageModule],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCQffU0fW-jdRd_b1Eqm8W2vkSukffJ988',
  authDomain: 'ionic-app-master.firebaseapp.com',
  projectId: 'ionic-app-master',
  storageBucket: 'ionic-app-master.appspot.com',
  messagingSenderId: '105111909806',
  appId: '1:105111909806:web:26bb1cfda1e95c0f34443f',
  measurementId: 'G-6XYKV6EQY8'
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [

    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule],
  providers: [

    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
