function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  const hasOpening = !isDoorLocked || !isWindowClosed;

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`
  );
  console.log(isSecure ? "Secure" : "Unsafe");

  if (!isSecure && hasOpening) {
    console.log("Reason: door or window is not secured");
  }

  console.log("---");
}

checkSecurity(true, true, true, true);
checkSecurity(true, true, false, true);
checkSecurity(false, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(true, true, true, false);