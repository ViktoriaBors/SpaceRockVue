Remember!
After fetch data ref.value = data (not just ref)

"Problems":
- dashboradNav -  emit so topNavbar disappears later -> login/egister button emit event to App.vue - hide topnavbar there
- search field - not working - problem on backend

Done:
- Home, Sample Type, Research Facility, Login - 100% working as I wanted

Missing:
- Database Center 
                  - pagination

                  - pending or approved sample should be different color on Modal


Solution for cookie problem
- bring vue and node part to same localhost - that needs to be one anyway if I want to deploy later.
- npm run build -> dist folder created which needs to be moved/copied to node app public folder. Then node gonna serve this folder by app.use(express.static(folder)). Dont forget to add res.sendFile (index.html) inside app.get(/) route. 
- After this for redirect must use Vue-routers in Vue frontend

Glitch: writing route path straight to browser search is not working as no html file in public. - vue serves different routes but they cannot called
f.e localhost:8081/dashboard - writing this to browser give error
localhost 8081 - index.html served then all menu can be reached and after login/register dashboard too.
