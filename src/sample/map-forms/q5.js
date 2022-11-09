const js = `dd = 
{
  footer: {
    columns: [
      {
        text: "(please keep a copy of this form)\\n ID_FORM_NO Updated: ID_DATE",
        alignment: "left",
        marginLeft: 10,
        fontSize: 8,
        bold: true,
      },
      {
        text: "(over)\\nCopyright© 2012 Management Action Programs, Inc.  All rights reserved.",
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
      fontSize: 13,
      bold: true,
      headerRows: 1,
      table: {
        widths: ["*", 20],
        body: [
          [
            {
              fillColor: "#092B58",
              color: "white",
              text: "KEY OUTSIDE INFLUENCES LIST",
            },
            {
              alignment: "RIGHT",
              text: "Q5",
              color: "#092B58"
            },
          ],
        ],
      },
    },
    {
      text: " ",
    },
    {
      style: {
        margin: [10, 15, 10, 15],
        fontSize: 11,
      },
      layout: {
        vLineWidth: function (i) {
          return 0;
        },
      },
      table: {
        widths: ["*", "*", "*"],

        headerRows: 1,
        body: [
          [
            {
              style: "header_line",
              text: "Name and Position",
            },
            {
              text: "Company Name and Address",
              style: "header_line",
            },
            {
              text: "Email & Phone",
              style: "header_line",
            },
          ],
          [
            {
              text: "1. ID_NAME1\\nID_TITLE1",
              style: "listitem",
            },
            {
              text: "ID_CNAME1\\nID_CADDRESS1",
              style: "listitem",
            },
            {
              text: "ID_EMAIL1\\nID_PHONE1",
              style: "listitem",
            },
          ],
          [
            {
              text: "2. ID_NAME2\\nID_TITLE2",
              style: "listitem",
            },
            {
              text: "ID_CNAME2\\nID_CADDRESS2",
              style: "listitem",
            },
            {
              text: "ID_EMAIL2\\nID_PHONE2",
              style: "listitem",
            },
          ],
          [
            {
              text: "3. ID_NAME3\\nID_TITLE3",
              style: "listitem",
            },
            {
              text: "ID_CNAME3\\nID_CADDRESS3",
              style: "listitem",
            },
            {
              text: "ID_EMAIL3\\nID_PHONE3",
              style: "listitem",
            },
          ],
          [
            {
              text: "4. ID_NAME4\\nID_TITLE4",
              style: "listitem",
            },
            {
              text: "ID_CNAME4\\nID_CADDRESS4",
              style: "listitem",
            },
            {
              text: "ID_EMAIL4\\nID_PHONE4",
              style: "listitem",
            },
          ],
          [
            {
              text: "5. ID_NAME5\\nID_TITLE5",
              style: "listitem",
            },
            {
              text: "ID_CNAME5\\nID_CADDRESS5",
              style: "listitem",
            },
            {
              text: "ID_EMAIL5\\nID_PHONE5",
              style: "listitem",
            },
          ],
          [
            {
              text: "6. ID_NAME6\\nID_TITLE6",
              style: "listitem",
            },
            {
              text: "ID_CNAME6\\nID_CADDRESS6",
              style: "listitem",
            },
            {
              text: "ID_EMAIL6\\nID_PHONE6",
              style: "listitem",
            },
          ],
          [
            {
              text: "7. ID_NAME7\\nID_TITLE7",
              style: "listitem",
            },
            {
              text: "ID_CNAME7\\nID_CADDRESS7",
              style: "listitem",
            },
            {
              text: "ID_EMAIL7\\nID_PHONE7",
              style: "listitem",
            },
          ],
          [
            {
              text: "8. ID_NAME8\\nID_TITLE8",
              style: "listitem",
            },
            {
              text: "ID_CNAME8\\nID_CADDRESS8",
              style: "listitem",
            },
            {
              text: "ID_EMAIL8\\nID_PHONE8",
              style: "listitem",
            },
          ],
          [
            {
              text: "9. ID_NAME9\\nID_TITLE99",
              style: "listitem",
            },
            {
              text: "ID_CNAME9\\nID_CADDRESS9",
              style: "listitem",
            },
            {
              text: "ID_EMAIL9\\nID_PHONE9",
              style: "listitem",
            },
          ],
          [
            {
              text: "10. ID_NAME10\\nID_TITLE10",
              style: "listitem",
            },
            {
              text: "ID_CNAME10\\nID_CADDRESS10",
              style: "listitem",
            },
            {
              text: "ID_EMAIL10\\nID_PHONE10",
              style: "listitem",
            },
          ],
          [
            {
              text: "11. ID_NAME11\\nID_TITLE11",
              style: "listitem",
            },
            {
              text: "ID_CNAME11\\nID_CADDRESS11",
              style: "listitem",
            },
            {
              text: "ID_EMAIL11\\nID_PHONE11",
              style: "listitem",
            },
          ],
          [
            {
              text: "12. ID_NAME12\\nID_TITLE12",
              style: "listitem",
            },
            {
              text: "ID_CNAME12\\nID_CADDRESS12",
              style: "listitem",
            },
            {
              text: "ID_EMAIL12\\nID_PHONE12",
              style: "listitem",
            },
          ],
        ],
      },
    },
  ],
  styles: {
    table1: {
      margin: [0, 5, 0, 15],
    },
    header_left: {
      alignment: "right",
    },
    listitem: {
      lineHeight: 1.2,
    },
    header_line: {
      bold: true,
      color: "#FFFFFF",
      fillColor: "#092B58",
      align: "left",
    },
  },
  images: {
    icon: " url('data:image/png;base64,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')",
  },
};`;
export default js;
