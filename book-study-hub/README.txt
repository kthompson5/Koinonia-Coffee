THE FORGE - QUICK START

WHAT THIS IS
This is a simple, mobile-first book study hub for your church group.
It is designed so Pilgrim's Progress is just Study #1, not the permanent theme.

FILES
index.html        = homepage / main hub
study.html        = template page that displays each individual study
styles.css        = design and mobile styling
studies-data.js   = the main file you will edit most often
app.js            = fills the pages with your study data automatically

HOW IT WORKS
The homepage and study pages both pull from studies-data.js.
Every study in the "studies" array becomes part of the library.

HOW TO ADD A NEW STUDY
1. Open studies-data.js
2. Find the "studies" array
3. Copy one full study object
4. Paste it below
5. Change these fields:
   - slug
   - title
   - author
   - status
   - dateLabel
   - meetingDay
   - durationLabel
   - summary
   - aim
   - themes
   - discussionQuestions
   - guides
   - resources
   - meetingNotes
   - weeks

IMPORTANT STATUS RULE
Use only one study with status: "current"
Other studies can be "upcoming" or "archived"

HOW TO OPEN A STUDY PAGE
Each study page uses this pattern:
study.html?study=your-study-slug

EXAMPLE
study.html?study=pilgrims-progress

HOW TO TURN AN OLD STUDY INTO AN ARCHIVE
In studies-data.js:
- change status from "current" to "archived"
- add your next study and mark that one as "current"

HOW TO EDIT WEEK LENGTH
This site supports any number of weeks.
Just add or remove week objects inside the "weeks" array for that study.

GOOD SIMPLE WORKFLOW FOR YOU
1. Keep current week's reading updated
2. Add 3-5 discussion questions
3. After the meeting, add short recap notes
4. When the study ends, leave it in the library as an archive

HOW TO VIEW THE SITE
Option 1:
Double-click index.html

Option 2:
Use a simple local server if you want cleaner testing
For example in Python:
python -m http.server

Then open the local address shown in your terminal.

SUGGESTED NEXT UPGRADES LATER
- church/group name in the header
- password-protected notes page
- podcast/audio section for each week
- downloadable PDF handouts
- simple form for prayer requests or discussion responses
