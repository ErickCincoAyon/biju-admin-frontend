import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginModel } from '../models/login.model';
import { CodeToLoginModel } from '../models/code-to-login.model';
import { GeneralModel } from '../../models/general.model';
import { MessageModel } from '../../models/message.model';
import { AdminModel } from '../models/admin.model';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { selectAccessToken, selectAdmin } from '../store/selectors/auth.selector';
import { NewPasswordModel } from '../models/new-password.model';

const url = environment.wsUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _store: Store<AuthState>
  ) { }

  public signin( admin: LoginModel  ): Observable<GeneralModel<MessageModel>> {
    
    return this._http.post(`${ url }/auth/admin/signin`, admin );

  }

  public sendCode( code: CodeToLoginModel ): Observable<GeneralModel<MessageModel>> {

    return this._http.post(`${ url }/auth/admin/signin/send-code`, code )
    .pipe(
      tap(( response: GeneralModel<MessageModel> ) => {
        localStorage.setItem('access_token', response.data!.access_token! );
      })
    );

  }

  public recover( email: string, appUrl: string ): Observable<GeneralModel<MessageModel>> {

    return this._http.post(`${ url }/auth/admin/recover`, { email, url: appUrl });

  }

  public newPassword( form: NewPasswordModel ): Observable<GeneralModel<MessageModel>> {
    
    return this._http.post(`${ url }/auth/admin/new-password`, form )
    .pipe(
      tap(( response: GeneralModel<MessageModel> ) => {
        localStorage.setItem('access_token', response.data!.access_token! );
      })
    );

  }

  public myProfile( token: string  ): Observable<GeneralModel<AdminModel>> {

    return this._http.get(`${ url }/admin/my/profile`, {
      headers: {
        'Authorization': `Bearer ${ token }`
      }
    });

  }

  public renewAccessToken( token: string  ): Observable<GeneralModel<MessageModel>> {

    return this._http.get(`${ url }/auth/admin/renew-access-token`, {
      headers: {
        'Authorization': `Bearer ${ token }`
      }
    })
    .pipe(
      tap(( response: GeneralModel<MessageModel> ) => {
        localStorage.setItem('access_token', response.data!.access_token! );
      })
    );
  }

  public isAuth(): Observable<boolean> {

    return this._store.select( selectAccessToken ).pipe(
      map( value  => {
        if ( value ) {
          return true;
        } else {
          return false;
        }
      })
    );

  }

  public isAuthAdmin(): Observable<boolean> {

    return this._store.select( selectAdmin ).pipe(
      map( value  => {
        if ( value ) {
          return true;
        } else {
          return false;
        }
      })
    );

  }

  public getAccessToken(): string {
    return localStorage.getItem('access_token')!;
  }
  
}