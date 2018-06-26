import {Component} from '@angular/core';
import {FacebookLoginProvider, SocialUser,AuthService} from 'angular-6-social-login-v2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  {
  constructor(private socialAuthService: AuthService) {}
  user: SocialUser;
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          this.user = userData;
          // console.log(socialPlatform + ' sign in data : ', userData);
          // Now sign-in with userData
          // ...
        }
      );
    }
  }
  public socialSignOut() {
    this.socialAuthService.signOut().then((res) => {
      this.user = res;
      console.log(res);
    });
  }
}
