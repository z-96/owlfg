import passport from "passport";
import session from "express-session";
import BNet from "passport-bnet";

export default function(app) {
  // Initialze passport
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new BNet.Strategy({
    clientID: process.env.BNET_ID,
    clientSecret: process.env.BNET_SECRET,
    callbackURL: `${process.env.URL}/auth/callback`,
  }, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }));

  // App middleware
  app.use(session({
    secret: 'blizzard',
    saveUninitialized: true,
    resave: true,
    cookie: { secure: true },
  }));
  app.use(passport.initialize());
  app.use(passport.session());


  app.get("/auth", passport.authenticate("bnet"));


  app.get("/auth/callback", passport.authenticate("bnet", {
    failureRedirect: "/"
  }), (req, res) => {
    res.redirect("/");
  });
};
