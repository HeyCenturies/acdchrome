# Chrome Extension for ACDC

This beta version that includes: <br>
  - [BR/US] Calculate Hours by Project on ACDC Monthly Report
  - [US] 8h time-entry for the whole week by pressing the "Save Week" button
  
PS: When you access the month report page, reload it so the related feature above can be loaded. This gonna be fixed in the future, this is a workaround considering how ACDC loads the page and how Chrome plugins work.</p>

Creators: 
  - Vitor Medeiros
  - Ricardo Henrique
  

# How to Install

1. Clone the repository
2. Open `chrome://extensions/`
3. Enable Developer Mode (Top-Right Corner)
4. Click "Load Unpacked" button and select the project folder
5. Open ACDC and enjoy the features!

---

# Where are the features at?

This version currently supports two features:

<b>Monthly Calculator by project</b> (usefull when you're part of more than one project and wants to check how many hours you spent/have to spend for a specific project):
1. Go to ACDC
2. Click Monthly Report
3. F5 to reload the page (step won't be required in the future)
4. You will see a button under the monthly report button
         
<b>Save Week Button</b>, for <b>US EMPLOYEES ONLY</b> , you can fill your timesheet from monday to the current day of the week.
1. Open ACDC
2. Click on any day of the week
3. You'll see the green "Save Week" button right next to the normal blue save button
4. Select your project (must), add notes (optional) and click on "Save Week", page will be reloaded once its done.
5. Double check your entries,make sure everything was filled correctly as expected
6. Enjoy not needing to fill each day individually!

[Save Week Troubleshoot Wiki](https://github.com/HeyCenturies/acdchrome/wiki/%5BSave-Week-TroubleShooting%5D)

---

### ROADMAP

```
[Monthly Calculator] Fix the refresh page requirement
[Save Week] Better log messages
[Save Week] Add progress bar
[New Feature] Daily Entry + Scheduler Support
[Project] Re-write the whole thing using React + Typescript
```

