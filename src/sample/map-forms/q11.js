const js = `dd = 
{
  footer: {
    columns: [
      {
        text: "ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(please keep a copy of this form)\\nCopyright© 2012 Management Action Programs, Inc.  All rights reserved.",
        alignment: "right",
        marginRight: 10,
        fontSize: 8,
        bold: true,
      },
    ],
  },
  content: [
    {
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 40],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "QUESTIONNAIRE FOR SUPERVISING MANAGER OR PARTNER",
            },
            {
              alignment: "center",
              text: "Q11",
              color: "#092B58",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "1.", bold: true },
            {
              text: "Please describe leadership/management strengths of ID_PARTICIPANT_NAME.",
              bold: true,
            },
          ],
          ["", "ID_AP_LEADERSHIP_SKILLS"],
          [
            { text: "2.", bold: true },
            {
              text: "Every leader/manager has opportunities for growth and improvement. What are the management and/or leadership skills in which ID_PARTICIPANT_NAME could improve?",
              bold: true,
            },
          ],
          ["", "ID_AP_LS_FOR_IMPROVEMENT"],
          [
            { text: "3.", bold: true },
            {
              text: "What are the ID_PARTICIPANT_NAME's measurable performance goals($, #, %, etc) for the next 12 months?",
              bold: true,
            },
          ],
          ["", "ID_AP_1_YEAR_GOAL"],
          [
            { text: "4.", bold: true },
            {
              text: "What are ID_PARTICIPANT_NAME's measurable performance goals($,#,%, etc.) that should be achieved within next 30 to 45 days?",
              bold: true,
            },
          ],
          ["", "ID_AP_SHORT_TERM_GOALS"],

          [
            { text: "5.", bold: true },
            {
              text: "What are the main challenges ID_PARTICIPANT_NAME must solve in order to achieve the above goals?",
              bold: true,
            },
          ],
          ["", "ID_AP_CHALLENGES"],
          [
            { text: "6.", bold: true },
            {
              text: "What are the realistic personal career goal(s) for ID_PARTICIPANT_NAME within the organization?",
              bold: true,
            },
          ],
          ["", "ID_AP_PERSONAL_CAREER_GOALS"],
          [
            { text: "7.", bold: true },
            {
              text: "What are the main COMMUNICATING challenges that ID_PARTICIPANT_NAME faces today?",
              bold: true,
            },
          ],
          ["", "ID_AP_COM_CHALLENGES"],
          [
            { text: "8.", bold: true },
            {
              text: "What are the main PLANNING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_PLAN_CHALLENGES"],
        ],
      },
      layout: {
        hLineColor: function (rowIndex, node, columnIndex) {
          if (rowIndex === node.table.body.length) {
            return "#FFFFFF";
          } else if (rowIndex % 2 === 0) {
            return "#000000";
          } else {
            return "#FFFFFF";
          }
        },
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
    {
      pageBreak: "before",
      layout: "noBorders",
      table: {
        widths: [250, "auto"],
        body: [
          [
            {
              image: "icon",
              alignment: "center",
              width: 125,
            },
            {
              layout: "noBorders",
              fontSize: 9,
              table: {
                body: [
                  [{ style: "header_left", text: "Participant:" }, "ID_NAME"],
                  [{ style: "header_left", text: "Organization:" }, "ID_ORG"],
                  [{ style: "header_left", text: "Workshop Date:" }, "ID_DATE"],
                  [{ style: "header_left", text: "Due Date:" }, "ID_DUE"],
                  [
                    { style: "header_left", text: "Return Fax:" },
                    "(818) 981-2717",
                  ],
                ],
              },
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: "\\nBACK ",
    },
    {
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: [40, "*"],
        body: [
          [
            {
              alignment: "center",
              color: "#092B58",
              text: "Q11",
            },
            {
              fillColor: "#092B58",
              color: "white",
              text: "QUESTIONNAIRE FOR SUPERVISING MANAGER OR PARTNER",
            },
          ],
        ],
      },
    },
    {
      fontSize: 11,
      bold: true,
      text: " ",
    },
    {
      table: {
        body: [
          [
            { text: "9.", bold: true },
            {
              text: "What are the main ORGANIZING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_ORG_CHALLENGES"],
          [
            { text: "10.", bold: true },
            {
              text: "What are the main STAFFING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_STAFF_CHALLENGES"],
          [
            { text: "11.", bold: true },
            {
              text: "What are the main CONTROLLING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_CONTROL_CHALLENGES"],
          [
            { text: "12.", bold: true },
            {
              text: "What are the main LEADING challenges ID_PARTICIPANT_NAME faces?",
              bold: true,
            },
          ],
          ["", "ID_AP_LEAD_CHALLENGES"],
          [
            { text: "13.", bold: true },
            {
              text: "What would you expect  ID_PARTICIPANT_NAME to gain from this management process? How will you know when those expectations have been met?",
              bold: true,
            },
          ],
          ["", "ID_AP_EXPECTATION"],
        ],
      },
      layout: {
        hLineColor: function (rowIndex, node, columnIndex) {
          if (rowIndex === node.table.body.length) {
            return "#FFFFFF";
          } else if (rowIndex % 2 === 0) {
            return "#000000";
          } else {
            return "#FFFFFF";
          }
        },
        vLineWidth: function (i) {
          return 0;
        },
      },
    },
  ],

  styles: {
    header_left: {
      alignment: "right",
    },
  },
  images: {
    icon: " url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAnCAYAAAD5Lu2WAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAZKADAAQAAAABAAAAJwAAAAATIN7iAAAHkklEQVRoBe1avXIbNxAGjopJ2oXlJjOqwtI2xzHzBKKLZNyZKRLLlZgnMP0Epp8gyhOY7uSkiNRpJoWoJ4icRI670JUmaSIWjkjZPORbHE863S2Aw5GyGmKGvLvF/h0WWOwuTopFu5QROGzcr8lQPRBSNKEA/QZlOb4ncbNoH2kE/r7zVUtJuSqkbEFkLSNWqScLg2RGZX6Af+pfNsJSEBug6eIcfJh8sTCIa5Q8+/9tNJfHYfmpcRUY+Ckh3q682qktGfoX4IIjAGO0YYyOL7lUaoNoAl/CBb59BFQo9+0YfG85GPeoZ2EQfnwKQ1f+2OmribinlHghhBrmYqTU9o39/hHhLgySa8T8kMgoK7/ttBHG1oRSP7io4a56Mc5iU49H4gKvh3fut2UgnnMi4s087luq1Nf6eAD8rMFiR8evX359BpntrnJzrSlK4mmay0RMnrw/+MnL50LfNvisp3nFz0V4Em21/nBDCXk35uO6SqH2lQj2xUTtjd5sDmz4K7/v9A4/RyIos2OAke8laZewRFaTAH0Pysrtte7o9WY301cEEIge5HyWJi1NSsvv00DHMwaiIywDtySCNngCx6/BGA12LIxsZBO6CEw0QZM6RJR08vrltgkdLqx7eBcrJT0OGJskjXEPkVI9FrXWchK5yD3NaNg3Y4xCvG6u1WzGmPJcL8J7FhoMcrMk5Vb19sOfbWMWh7axLGz8eyv7O4P4ma5Gg+DFlytXK94zLclcK6eYZXoOKf+DLNHqcDW5fOXWty0X1oX0oySCMfvVZJRMSJxyV6STxSAwCVYJ/H+tqPJkUKyOwvRpuUrpGlAanHnGbG1ngB8JQO9bvVre5YxC0ddZKKyGtLek1bIahFYJfGQ3TZTrGe5Ou71cyG6kT+rfNPCy+VyflA9mmUhubRwYUjZM3iX4EDbhqp6hyNjguDgMApMgoinyctVr5a42KCe1AIw2ax8yJdVc3JYSYu/4YFMmfzrxE5T4mZtpD/704Jd92uDTe0fMyWkQjVjiY+iYSfoaGVA+TsNnfG7z9Hw2LOXc5Z+KR5jbHx1stmGs706BmRvsZdUrzQzYAchlEKySJgY5N3MZRIUyh+zc3dEmLa9nCdQQ+8pGFk77n6j56MzxcMFglB6MYlwpQRB4r9JcBtGKMYkdp7AeBPhwrq8ozPRiyB22RHg+jj8noyTa554v4AGJKDshpqJqviJzG0SvkihLtssoGgRYuCIBY2daGIZbUZasXnHkoHvARTscblGYrdKAvINZ1XZJuQ2i2ThyCnItMNyqXaRfb1Qq4d3VyZ8/bhG30LhKkEtdq7DG9NOiGDZW8A1fSi+DaL9sWSWBDGzL11c3jY9Zxg6odldTjlLBdRka6OcdXBgkMWApBgzUCjIaxLRZwQ18z7kBc4nEXX42akilG8N+RO4qprO5LdA3oqgvxp7vlfIjE0dMhiNTnwluNMjo3ahzllUmyZmSCiWBZKhMU8Pjd+NuBpwTYHM3J8cn/SQbrJiN5HPyPl/JJUmR/74kShgnviH52+J7zFCjQcRg68gcUp4vPEZZKbL6VNP04JMC5340uSsc+myTfklGmEC2l19P4s7rXnsFy1GAQydWDbNBgD76b7RhXCXXKuhDM5RIUB54G9FrLO8/7WYM7oqdeWQgMhTb5lNwJJ0qNx+tVuqP1mGMXQQwz1lxAFJ5JD1pTLhJuNUgepUI/gsKKKNLKnArMEx2daDm0i2iUKycrfRhmnmsoaYMixYcKWqs1tcU/WRJ/AX314d77gHejHXNXtWw6GS0GwSSdDaK2Z4VCghKKmSYbJ96RXRZeH5IEBiSOsZdxVxNhtL9tNooSLjwpoYfRNgsOhmdBiH9QxV2uPcwzRI14VcVx4ODRVERf5waKtHnaDSM9j1LKaNcxTdTF9pQypnIli1ZdIlfciFQPyVg8Jl7MMCqCx8DQmfMfReetd+0OkAUSLjK+pq5NKNEDe6SbdOCY7T3sRjFgTQRRu/GnaIrI5acyyAaeYI9oSR2Y0LjdWJwNUYCtqPNQgmIvMIw3hGJpZMSW8obZpnBSb0ocIHx+wJjE+VCyd5i97kNQrMeZ8bbpkSNxOtZ4vgCw6WmPohKfwjgIvLop7wBH0G085LoQReJAmZ46jIH8zJCUpfcBiEinAl3EGkY3AUiC1qyMzbfgyhfcacFx1QeY+SD8gcClK6xf84dXgahGQH//QJeYT2tx6xJYMwPfFpwLUzDhinyfzcLFqsME4CiguMoOet5xEuBehmENERo2cHxbAsvdv1MY4q7xzNvlrpabDg3p2IiZmr7TKb9DhOHcoXMxJlSEbxn53A5vbnC3nOqUWiZOqXDYM0cXZAM00EU9SWLifTsajZ8GIpOQGsuHpfR728QaElZ6HSzoxLB21mTwPjF4d+x8rimhvHZB9fLwQg/1pHrv8iCIycvL6yQQXSsTaURamH+iEXjG/7M5+YUvflXTUkMvvzYMojDRJrvMbNJji98CbPomS8R4dOqKN96uDx+87LvorfIGMS0gQrgCnldJnJiHNiYnrsia97Ap4BHXB/ByG0lQtce5PczuAUOmTI8PAD/AyLpoaak/CiNAAAAAElFTkSuQmCC')",
  },
};`;
export default js;