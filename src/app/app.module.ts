import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {HeaderComponent} from './core/components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {StatscardComponent} from './page/statscard/statscard.component';
import {MatIconModule, MatIconRegistry} from '@angular/material';
import {StatscolcardsComponent} from './page/statscolcards/statscolcards.component';
import {DetailcardComponent} from './page/detailcard/detailcard.component';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        StatscardComponent,
        StatscolcardsComponent,
        DetailcardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        MatIconModule
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        matIconRegistry.addSvgIcon('run-man', sanitizer.bypassSecurityTrustResourceUrl('assets/running-man.svg'));
    }
}
