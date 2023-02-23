export default function canIterate(data) {
  try {
    data[Symbol.iterator]();
    return true;
  } catch (err) {
    return false;
  }
}
