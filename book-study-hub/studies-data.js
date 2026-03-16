const siteData = {
  siteName: "Koinonia & Coffee",
  brandKicker: "Grace Harbor's Book Study",
  footerCopy: "A simple home base for Christian book studies, discussion nights, and archived notes.",
  home: {
    eyebrow: "A shared place for reading, discussion, faith, and fellowship",
    title: "Walking the Christian Life Through Great Books",
    copy: "This site serves as the home for Grace Harbor’s book studies. Here you’ll find the reading plans, discussion questions, helpful resources, and notes that guide our conversations as we learn and grow together.",
    sharedResources: [
      {
        title: "Reading plan",
        description: "Point the group to the exact chapters or sections for the current week.",
        linkText: "Handled inside each study page",
        link: "#current-study"
      },
      {
        title: "Audio links",
        description: "Helpful for Christians who prefer audio over paper",
        linkText: "Add audiobook or podcast links",
        link: "https://open.spotify.com/album/3W1oDbKYHtAfj4QRZkFJWM"
      },
      {
        title: "Archive",
        description: "Keep old studies available so the site becomes a growing library instead of a one-time project.",
        linkText: "Browse the library",
        link: "#study-library"
      }
    ]
  },
  studies: [

    // =====================================================
    // CURRENT STUDY
    // Keep your active study here.
    // When you start a new current study, paste it below.
    // =====================================================
    // >>> INSERT NEXT CURRENT STUDY BELOW THIS LINE <<<

    {
      slug: "pilgrims-progress",
      title: "The Pilgrim’s Progress",
      author: "John Bunyan",
      thumbnail: "images/pilgrims-progress.jpg",
      status: "current",
      dateLabel: "Start March 20th, 2026",
      meetingDay: "Panera Bread NW Expressway",
      durationLabel: "4 weeks",
      audience: "Christians who want a stronger picture of the Christian life, endurance, temptation, and finishing well.",
      summary: "The first study in the library. This page is built to help the group before the meeting, during the meeting, and after the meeting.",
      aim: "Use Bunyan’s allegory to talk about conversion, perseverance, spiritual danger, guidance, discouragement, and the long obedience of the Christian life.",
      thisWeekFocus: "Christian leaves the City of Destruction and begins the hard first steps of the journey.",
      themes: ["Burden of Sin", "Repentance", "Perseverance", "Discernment", "Temptation", "Hope"],
      resources: [
        {
          title: "Character Guide",
          description: "List of characters and descriptions",
          linkText: "EBSCO analysis of major characters",
          link: "https://www.ebsco.com/research-starters/literature-and-writing/pilgrims-progress-analysis-major-characters"
        },
        {
          title: "Audiobook",
          description: "Audiobook version for those who prefer listening",
          linkText: "Audiobook Link",
          link: "https://open.spotify.com/episode/70zwZ0K6S7VgUFTEJfJQTL"
        },
        {
          title: "Jordan Peterson on The Pilgrim’s Progress",
          description: "Jordan Peterson reflects on the symbolism and enduring relevance of Bunyan’s classic allegory.",
          linkText: "Watch the video",
          link: "https://www.youtube.com/watch?v=J8eU_UOFFuw"
        },
        {
          title: "Christian Guides to the Classics: The Pilgrim’s Progress",
          description: "A short course from The Gospel Coalition exploring the themes, symbolism, and historical significance of Bunyan’s work.",
          linkText: "Explore the course",
          link: "https://www.thegospelcoalition.org/course/christian-guides-classics-pilgrims-progress/#course-introduction"
        },
        {
          title: "Allie Beth Stuckey on The Pilgrim’s Progress",
          description: "A concise introduction to Bunyan’s classic and why it has shaped Christian readers for centuries.",
          linkText: "Watch the overview",
          link: "https://www.youtube.com/watch?v=sHgQM0C0jR0"
        }
      ],
      weeks: [
        {
          label: "Week 1 -- March 20th, 2026",
          title: "Apology -thru- The Interpreters House",
          reading: `The Author’s Apology<br>
                    Stage 1 - The City of Destruction<br>
                    Stage 2 - The Interpreter’s House`,
          focus: "Conviction, leaving the old life, and the difficulty of first obedience.",
          questions: [
            "What causes Christian to realize something is wrong with his life, and why do others around him respond so differently?",
            "Which character in the opening chapters (Obstinate, Pliable, Evangelist, etc.) do you find most recognizable in real life?",
            "What lessons does Christian learn at the Interpreter’s House that seem most important for the beginning of the Christian journey?"
          ],
          takeaway: "The Christian journey begins when a person becomes aware of their sin, turns from the false comfort of the world, and humbly receives guidance that points them toward the narrow way."
        },
        {
          label: "Week 2 -- March 27th, 2026",
          title: "The Place of Deliverance -thru- The Valley of the Shadow of Death",
          reading: `Stage 3 – The Place of Deliverance<br>
                    Stage 4 – The Valley of the Shadow of Death`,
          focus: "Christian experiences the relief of salvation at the Cross and quickly learns that the Christian life still involves real spiritual conflict and perseverance.",
          questions: [
            "What changes for Christian when his burden falls at the Cross, and why is that moment so important?",
            "What does Christian’s battle with Apollyon teach us about the reality of spiritual struggle in the Christian life?",
            "Why do you think Bunyan places the Valley of the Shadow of Death so soon after Christian’s moment of deliverance?"
          ],
          takeaway: "Salvation removes the burden of sin, but the Christian journey still requires faith, endurance, and trust in God through darkness and opposition."
        },
        {
          label: "Week 3 -- April 3rd, 2026",
          title: "TBD",
          reading: "TBD",
          focus: "TBD",
          questions: [
            "TBD",
            "TBD",
            "TBD"
          ],
          takeaway: "TBD"
        },
        {
          label: "Week 4 -- April 10, 2026",
          title: "TBD",
          reading: "TBD",
          focus: "TBD",
          questions: [
            "TBD",
            "TBD",
            "TBD"
          ],
          takeaway: "TBD"
        }
      ]
    },

    // =====================================================
    // UPCOMING STUDIES
    // Add future studies here before they become current.
    // =====================================================
    // >>> INSERT NEXT UPCOMING STUDY BELOW THIS LINE <<<

    {
      slug: "the-great-divorce",
      title: "The Great Divorce",
      author: "C.S. Lewis",
      thumbnail: "images/the-great-divorce.jpg",
      status: "upcoming",
      dateLabel: "Start April 17th, 2026",
      meetingDay: "Panera Bread NW Expressway",
      durationLabel: "3 weeks",
      audience: "Christians who want to reflect on sin, grace, choice, pride, and the eternal significance of what the soul loves most.",
      summary: "The second study in the library. This page is built to help the group before the meeting, during the meeting, and after the meeting.",
      aim: "Use Lewis’s imaginative vision of heaven and hell to explore sin, repentance, pride, grace, and the freedom of choosing either joy with God or separation from Him.",
      thisWeekFocus: "Lewis introduces the Grey Town and the bus journey toward heaven, revealing how pride, self-deception, and attachment to sin keep many souls from accepting the joy being offered to them.",
      themes: ["Grace", "Choice", "Pride", "Repentance", "Heaven", "Transformation"],
      resources: [
        {
          title: "Character Guide",
          description: "List of characters and descriptions",
          linkText: "CourseHero.com",
          link: "https://www.coursehero.com/lit/The-Great-Divorce/characters/"
        },
        {
          title: "Audiobook",
          description: "Audiobook version for those who prefer listening",
          linkText: "Audiobook Link",
          link: "https://www.youtube.com/watch?v=3EF5xs3IMUQ"
        },
        {
          title: "Hillsdale College Collection on C.S. Lewis",
          description: "C.S. Lewis's depiction of hell in The Great Divorce",
          linkText: "Watch the video",
          link: "https://www.youtube.com/watch?v=5XqM6lYdZQ0"
        },
        {
          title: "C.S. Lewis Blog",
          description: "The Genius of C.S. Lewis: The Great Divorce",
          linkText: "Explore the article",
          link: "https://www.pintswithjack.com/the-genius-of-c-s-lewis-the-great-divorce/"
        }
      ],
      weeks: [
        {
          label: "Week 1 April 17th, 2026",
          title: "The Bus",
          reading: "Chapters 1 -thru- 7",
          focus: "Lewis introduces the Grey Town and the bus journey toward heaven, revealing how pride, self-deception, and attachment to sin keep many souls from accepting the joy being offered to them.",
          questions: [
            "What does the Grey Town reveal about the nature of hell?",
            "Why do some of the ghosts hesitate or resist the invitation to travel toward heaven?",
            "What signs do we see that accepting joy in heaven requires giving something up?"
          ],
          takeaway: "Lewis shows that the door to joy is open, but many refuse it because they cling to pride, resentment, or the small comforts of the Grey Town."
        },
        {
          label: "Week 2 April 24th, 2026",
          title: "TBD",
          reading: "TBD",
          focus: "TBD",
          questions: [
            "TBD",
            "TBD",
            "TBD"
          ],
          takeaway: "TBD"
        },
        {
          label: "Week 3",
          title: "TBD",
          reading: "TBD",
          focus: "TBD",
          questions: [
            "TBD",
            "TBD",
            "TBD"
          ],
          takeaway: "TBD"
        }
      ]
    },

    // =====================================================
    // ARCHIVED STUDIES
    // Move completed studies here.
    // =====================================================
    // >>> INSERT NEXT ARCHIVED STUDY BELOW THIS LINE <<<

    {
      slug: "future-study-template",
      title: "Your Next Study",
      author: "Add the next author",
      status: "archived",
      dateLabel: "Coming after Pilgrim’s Progress",
      meetingDay: "Set your meeting rhythm",
      durationLabel: "Any length",
      audience: "This placeholder shows how easy it is to add future books.",
      summary: "Duplicate the structure in the data file, fill in the details, and this new study will appear automatically in the library.",
      aim: "Replace this placeholder with the next real book when you are ready.",
      thisWeekFocus: "Use this as your template for the next study.",
      themes: ["Flexible", "Repeatable", "Archived", "Mobile-Friendly"],
      guides: [
        {
          title: "Simple reminder",
          items: [
            "Change the title",
            "Add the duration",
            "Write the summary",
            "Enter the weeks"
          ]
        }
      ],
      resources: [
        {
          title: "Starter note",
          description: "Once this becomes a real study, swap in the right links.",
          linkText: "Edit this in studies-data.js",
          link: "#"
        }
      ],
      meetingNotes: [
        "Keep short notes after each meeting so the study remains useful later."
      ],
      weeks: [
        {
          label: "Week 1",
          title: "Set the opening week",
          reading: "Enter the reading here",
          focus: "Write the main focus here.",
          questions: ["Add a question", "Add a question", "Add a question"],
          takeaway: "Add the main takeaway."
        }
      ]
    }

    // =====================================================
    // END OF STUDIES ARRAY
    // Add all future study objects above this line.
    // =====================================================

  ]
};
