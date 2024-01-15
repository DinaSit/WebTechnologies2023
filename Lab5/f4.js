function insertSequence(arr, i, j) {
    if (isNaN(i) || i > arr.length || i < 0) {
        arr.splice(0, arr.length, "Ошибка: некорректное значение i"); // для замены всех элементов массива arr новым элементом
        // .splice(индекс, с которого начинается изменение массива, количество элементов, которые нужно удалить, новый элемент)
        return;
    }
    // Вставка последовательности из j чисел после i-го элемента
    arr.splice(i, 0, ...j);
    // ...j - оператор расширения (spread operator), который распаковывает элементы массива sequence и передает
    // их в качестве аргументов для метода splice()
}