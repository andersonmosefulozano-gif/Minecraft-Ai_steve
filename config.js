"use strict";

/**
 * Configuración principal de AI Steve
 * Servidor: Aternos
 * Minecraft: 1.20.1
 */

module.exports = {

  // ─── CONEXIÓN AL SERVIDOR ────────────────────────────────────────────────
  host:     process.env.MC_HOST     || "Serverlool.aternos.me",
  port:     Number(process.env.MC_PORT || 20793),
  username: process.env.MC_USERNAME || "AiSteve",
  password: process.env.MC_PASSWORD || undefined,
  auth:     process.env.MC_AUTH     || "offline",
  version:  process.env.MC_VERSION  || "1.20.1",


  // ─── REGISTROS ───────────────────────────────────────────────────────────
  logLevel:     process.env.LOG_LEVEL || "info",
  logFile:      process.env.LOG_FILE || "./data/aisteve.log",
  telemetryFile: process.env.TELEMETRY || "./data/telemetry.jsonl",


  // ─── MEMORIA ─────────────────────────────────────────────────────────────
  memoryFile:   process.env.MEMORY_FILE || "./data/memory.json",
  saveInterval: 30000,


  // ─── VIDA ────────────────────────────────────────────────────────────────
  health: {
    critical: 4,
    low: 8,
    comfortable: 16,
    full: 20,
  },


  // ─── HAMBRE ──────────────────────────────────────────────────────────────
  hunger: {
    critical: 6,
    low: 12,
    comfortable: 18,
    full: 20,
  },


  // ─── RIESGO ──────────────────────────────────────────────────────────────
  risk: {
    abort: 0.75,
    caution: 0.50,
    acceptable: 0.30,
  },


  // ─── COMBATE ─────────────────────────────────────────────────────────────
  combat: {
    engageRange: 12,
    fleeRange: 20,
    safeDistance: 5,
    maxMobsEngage: 3,
    kiteDistance: 7,
  },


  // ─── MOVIMIENTO Y NAVEGACIÓN ─────────────────────────────────────────────
  navigation: {
    defaultTimeout: 30000,
    longTimeout: 90000,
    stuckThreshold: 0.5,
    stuckRetries: 3,
    fleeDistance: 20,
  },


  // ─── INVENTARIO ──────────────────────────────────────────────────────────
  inventory: {
    fullThreshold: 0.85,
    criticalFull: 0.95,
    reserveSlots: 4,
  },


  // ─── MATERIALES QUE INTENTA MANTENER ─────────────────────────────────────
  reserves: {
    food: 16,
    wood: 32,
    stone: 64,
    coal: 16,
    iron: 16,
    torches: 32,
    buildBlocks: 128,
  },


  // ─── CONSTRUCCIÓN DE LA BASE ─────────────────────────────────────────────
  base: {
    shelterSize: 5,
    expandTrigger: 0.8,
  },


  // ─── EXPLORACIÓN ─────────────────────────────────────────────────────────
  exploration: {
    maxDistanceFromBase: 1000,
    chunkRadius: 2,
    nightVentureDist: 16,
  },


  // ─── RECUPERACIÓN DESPUÉS DE MORIR ───────────────────────────────────────
  recovery: {
    despawnSeconds: 300,
    minRetrieveChance: 0.40,
    gearUpBeforeReturn: true,
  },


  // ─── PLANIFICADOR GOAP ───────────────────────────────────────────────────
  goap: {
    maxPlanDepth: 20,
    planTimeoutMs: 5000,
  },


  // ─── VELOCIDAD DEL BOT ───────────────────────────────────────────────────
  tickIntervalMs: 500,
  perceptionIntervalMs: 1000,

};
