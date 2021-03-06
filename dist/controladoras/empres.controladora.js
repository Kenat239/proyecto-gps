"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("../modelos/empresa"));
//=======================================================
// Crear Empresa
//=======================================================
function CrearEmpresa({ nombre, estado, status }) {
    return __awaiter(this, void 0, void 0, function* () {
        return empresa_1.default.create({
            nombre,
            estado,
            status
        })
            .then((datos) => {
            return datos;
        })
            .catch((error) => {
            throw error;
        });
    });
}
exports.CrearEmpresa = CrearEmpresa;
//=======================================================
// Consultar todas las Empresas Activas
//=======================================================
function CargarEmpresas() {
    return __awaiter(this, void 0, void 0, function* () {
        return empresa_1.default.find({ status: 'ACTIVO' })
            .then((empresas) => {
            return empresas;
        })
            .catch((error) => {
            throw error;
        });
    });
}
exports.CargarEmpresas = CargarEmpresas;
//=======================================================
// buscar Empresa especifica por id
//=======================================================
function BuscarEmpresa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            empresa_1.default.findById({ _id: id }, 'nombre estado status')
                .then((resultado) => {
                resolve(resultado);
            })
                .catch((error) => {
                reject(error);
            });
        });
    });
}
exports.BuscarEmpresa = BuscarEmpresa;
//=======================================================
// Desactivar o Activar Empresa
//=======================================================
function DesactivarEmpresa(id, stat) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            empresa_1.default.updateOne({ _id: id }, { $set: { status: stat } })
                .then((resultado) => {
                resolve(resultado);
            })
                .catch((error) => {
                reject(error);
            });
        });
    });
}
exports.DesactivarEmpresa = DesactivarEmpresa;
