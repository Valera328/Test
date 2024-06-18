#include <iostream>
#include <fstream>

using namespace std;

// Функция для создания единичной матрицы порядка n
void createIdentityMatrix(int** matrix, int n) {
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            matrix[i][j] = (i == j) ? 1 : 0;
        }
    }
}

// Функция для вывода матрицы в файл
void outputMatrixToFile(ofstream& file, int** matrix, int n) {
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < n; ++j) {
            file << matrix[i][j] << ' ';
        }
        file << '\n';
    }
    file << '\n';
}

int main() {
    setlocale(LC_ALL, "RU");
    int n, k, l;
    cout << "Введите порядок матриц n: ";
    cin >> n;
    cout << "Введите количество матриц в первом файле k: ";
    cin >> k;
    cout << "Введите количество матриц во втором файле l: ";
    cin >> l;

    // Создаем массивы для матриц
    int*** matrices1 = new int** [k]; // Исправлено на int***
    for (int i = 0; i < k; ++i) {
        matrices1[i] = new int* [n]; // Исправлено на int*
        for (int j = 0; j < n; ++j) {
            matrices1[i][j] = new int[n]; // Исправлено на int[n]
        }
    }

    int*** matrices2 = new int** [l]; // Исправлено на int***
    for (int i = 0; i < l; ++i) {
        matrices2[i] = new int* [n]; // Исправлено на int*
        for (int j = 0; j < n; ++j) {
            matrices2[i][j] = new int[n]; // Исправлено на int[n]
        }
    }

    // Заполняем матрицы единичными матрицами
    for (int i = 0; i < k; ++i) {
        createIdentityMatrix(matrices1[i], n);
    }
    for (int i = 0; i < l; ++i) {
        createIdentityMatrix(matrices2[i], n);
    }

    // Открываем файлы для записи
    ofstream outputFile1("file1.txt");
    ofstream outputFile2("file2.txt");

    // Записываем матрицы в файлы
    for (int i = 0; i < k; ++i) {
        outputMatrixToFile(outputFile1, matrices1[i], n);
    }
    for (int i = 0; i < l; ++i) {
        outputMatrixToFile(outputFile2, matrices2[i], n);
    }

    // Освобождаем память
    for (int i = 0; i < k; ++i) {
        for (int j = 0; j < n; ++j) {
            delete[] matrices1[i][j]; // Исправлено на delete[]
        }
        delete[] matrices1[i]; // Исправлено на delete[]
    }
    for (int i = 0; i < l; ++i) {
        for (int j = 0; j < n; ++j) {
            delete[] matrices2[i][j]; // Исправлено на delete[]
        }
        delete[] matrices2[i]; // Исправлено на delete[]
    }
    delete[] matrices1;
    delete[] matrices2;

    cout << "Матрицы успешно записаны в файлы 'file1.txt' и 'file2.txt'." << endl;

    return 0;
}
