// LeetCode 929. Unique Email Addresses

/**
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function (emails) {
  let uniqueEmail = new Set();
  for (let email of emails) {
    [lname, dname] = email.split("@");
    local = lname.split("+")[0].replace(/[.]/gm, "");
    uniqueEmail.add(local + "@" + dname);
  }
  return uniqueEmail.size;
};
