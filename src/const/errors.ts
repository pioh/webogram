export const errors = {
  API_ID_PUBLISHED_FLOOD:
    "This API id was published somewhere, you can't use it now",
  BOT_METHOD_INVALID: "This method can't be used by a bot",
  INPUT_REQUEST_TOO_LONG: "The request is too big",
  NETWORK_MIGRATE: "Repeat the query to data-center X", // TODO
  PHONE_MIGRATE: "Repeat the query to data-center X", // TODO
  PHONE_NUMBER_APP_SIGNUP_FORBIDDEN: "You can't sign up using this app",
  PHONE_NUMBER_BANNED: "The provided phone number is banned from telegram",
  PHONE_NUMBER_FLOOD: "You asked for the code too many times.",
  PHONE_PASSWORD_FLOOD: "You have tried logging in too many times",
  PHONE_PASSWORD_PROTECTED: "This phone is password protected",
  SMS_CODE_CREATE_FAILED: "An error occurred while creating the SMS code",
  FILE_MIGRATE:
    "The file to be accessed is currently stored in a different data center X",
  USER_MIGRATE:
    "The user whose identity is being used to execute queries is associated with a different data center (for registration) X",

  FIRSTNAME_INVALID: "The first name is invalid",
  LASTNAME_INVALID: "The last name is invalid",
  PHONE_CODE_HASH_EMPTY: "phone_code_hash is missing",
  PHONE_CODE_EMPTY: "phone_code is missing",
  PHONE_CODE_EXPIRED: "The confirmation code has expired",
  API_ID_INVALID: "The api_id/api_hash combination is invalid",
  PHONE_NUMBER_OCCUPIED: "The phone number is already in use",
  USERS_TOO_FEW: "Not enough users",
  USERS_TOO_MUCH: "The maximum number of users has been exceeded",
  TYPE_CONSTRUCTOR_INVALID: "The type constructor is invalid",
  FILE_PART_INVALID: "The file part number is invalid",
  FILE_PARTS_INVALID: "The number of file parts is invalid",
  FILE_PART_Х_MISSING:
    "Part X (where X is a number) of the file is missing from storage",
  MD5_CHECKSUM_INVALID: "The MD5 checksums do not match",
  PHOTO_INVALID_DIMENSIONS: "The photo dimensions are invalid",
  FIELD_NAME_INVALID: "The field with the name FIELD_NAME is invalid",
  FIELD_NAME_EMPTY: "The field with the name FIELD_NAME is missing",
  MSG_WAIT_FAILED: "A waiting call returned an error",
  AUTH_KEY_UNREGISTERED: "The key is not registered in the system",
  AUTH_KEY_INVALID: "The key is invalid",
  USER_DEACTIVATED: "The user has been deleted/deactivated",
  SESSION_REVOKED:
    "The authorization has been invalidated, because of the user terminating all sessions",
  SESSION_EXPIRED: "The authorization has expired",
  AUTH_KEY_PERM_EMPTY:
    "The method is unavailble for temporary authorization key, not bound to permanent",
  FORBIDDEN:
    "Privacy violation. For example, an attempt to write a message to someone who has blacklisted the current user",
  NOT_FOUND: "An attempt to invoke a non-existent object, such as a method",
  NOT_ACCEPTABLE: "",
  FLOOD_WAIT: "A wait of X seconds is required",
  INTERNAL: `An internal server error occurred while a request was being processed; for example, there was a disruption while accessing a database or file storage.
If a client receives a 500 error, or you believe this error should not have occurred, please collect as much information as possible about the query and error and send it to the developers.`,

  PHONE_CODE_INVALID: "Invalid SMS code was sent",
  PHONE_NUMBER_INVALID: "Invalid phone number",
  PHONE_NUMBER_UNOCCUPIED: "No user with the given number is registered",
  SESSION_PASSWORD_NEEDED: "The user has enabled 2FA, more steps are needed",
  PASS_CHECK_ALG_NOT_SUPPORTED: "Unknown password check algoritm",
  EMPTY_PASSWORD: "Password required",
  PASSWORD_HASH_INVALID: "The provided password isn't valid"
};

// ignore if text === ""
export function findError(
  type: string
): { type: keyof typeof errors; text: string; id: string } {
  let id = "";
  let m = type.match(/^(.+)_(\d+)$/);
  if (m) {
    type = m[1];
    id = m[2];
  }
  let text = errors[type as keyof typeof errors];
  if (text == void 0) {
    text = `${type}${id ? `: ${id}` : ""}`;
  }
  if (id) text = text.replace(/\bX\b/g, id);
  return { type: type as keyof typeof errors, text, id };
}
