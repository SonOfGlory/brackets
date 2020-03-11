module.exports = function check(str, bracketsConfig) {
  let stack = [];
  // преобразование bracketsConfig
  for (let char of str) {
    // если открытая - добавляем, закрытая - проверяем последнюю в стеке, если совпадает - удаляем из стека и проверяем дальше

    // проверяем чар
      // если он последний в ожидаемых
      if (char == stack[stack.length-1]) {
        // убираем его оттуда
        stack.pop()
        }
      // иначе если он - один из открывающих
      else if (bracketsConfig.some(pair => pair[0] === char)) {
        // добавляем его пару в ожидаемые
        stack.push(bracketsConfig.find(pair => pair[0] === char)[1])
        }
      // иначе возавращаем отрицательный ответ
      else return false;

  }
  return stack.length === 0;
}
// ('|([{}])', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']])





















// module.exports = function check(str, bracketsConfig) { 
//   let open = new Set(bracketsConfig.map(pair => pair[0]));
//   let close  = new Set(bracketsConfig.map(pair => pair[1]));
//   let relevant = bracketsConfig.reduce((acc, [open, close]) => ({...acc, [close]: open}), {});
 
//   let stack = [];
//   for (let char of str) {
//     if (open.has(char)) {
//       stack.push(char);
//     }
//     if (close.has(char)) {
//       if (relevant[char] !== stack.pop()) return false;
//     }
//   }
//   return stack.length === 0;
// }


// function balance(a) {
//   for (var d = /(\u005B|\u0028|\u007B)[^\u005B\u0028\u007B]*?$/,
//     e = {
//       "(": /\u0028[^\u007D\u005D]*?\u0029/,
//       "[": /\u005B[^\u0029\u007D]*?\u005D/,
//       "{": /\u007B[^\u0029\u005D]*?\u007D/
//   }, b, c = !0; c;) b = a, a = a.replace(d, function (a, b) {
//       return a.replace(e[b], "")
//   }), b == a && (c = !1);
//   return !/[\u005B\u005D\u0028\u0029\u007B\u007D]/.test(a)};
  