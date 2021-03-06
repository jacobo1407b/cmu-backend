import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';
import {Strategy as JwtStrategy, StrategyOptions} from 'passport-jwt';
import {ExtractJwt} from 'passport-jwt';
import userCss from 'services/User/user.service';

passport.use(new LocalStrategy({
    usernameField:"matricula",
    session:false
}, async (matricula:string, password:string, done)=>{
    /**buscar usuario en bd por matricula */
    
    const user = await userCss.getUser(matricula);
    if(!user){
        return done(null,false)
    }else{
        const match = await userCss.comparePassword(password,user.password);
        if(match){
            return done(null, user);
        }else{
            return done(null, false);
        }
    }
}));

let opts:StrategyOptions  = {
    secretOrKey:process.env.SECRET_TOKEN,
    algorithms:['HS256'],
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    done(null,jwt_payload)
}));
