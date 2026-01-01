
const { Telegraf, Markup, session } = require("telegraf"); 
const {
    default: makeWASocket,
    useMultiFileAuthState,
    downloadContentFromMessage,
    emitGroupParticipantsUpdate,
    emitGroupUpdate,
    generateWAMessageContent,
    generateWAMessage,
    makeInMemoryStore,
    prepareWAMessageMedia,
    encodeNewsletterMessage,
    fetchLatestBaileysVersion,
    generateWAMessageFromContent,
    patchMessageBeforeSending,
    MediaType,
    areJidsSameUser,
    WAMessageStatus,
    jidEncode,
    encodeSignedDeviceIdentity,
    downloadAndSaveMediaMessage,
    AuthenticationState,
    GroupMetadata,
    initInMemoryKeyStore,
    getContentType,
    MiscMessageGenerationOptions,
    useSingleFileAuthState,
    BufferJSON,
    WAMessageProto,
    MessageOptions,
    WAFlag,
    WANode,
    WAMetric,
    ChatModification,
    MessageTypeProto,
    WALocationMessage,
    ReconnectMode,
    WAContextInfo,
    proto,
    WAGroupMetadata,
    ProxyAgent,
    waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent,
    WAMessage,
    BaileysError,
    WA_MESSAGE_STATUS_TYPE,
    MediaConnInfo,
    URL_REGEX,
    WAUrlInfo,
    WA_DEFAULT_EPHEMERAL,
    WAMediaUpload,
    jidDecode,
    mentionedJid,
    processTime,
    Browser,
    MessageType,
    makeChatsSocket,
    generateProfilePicture,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
    relayWAMessage,
    Browsers,
    GroupSettingChange,
    DisconnectReason,
    WASocket,
    encodeWAMessage,
    getStream,
    WAProto,
    isBaileys,
    AnyMessageContent,
    fetchLatestWaWebVersion,
    templateMessage,
    InteractiveMessage,    
    Header,
    viewOnceMessage,
    groupStatusMentionMessage,
} = require('@otaxayun/baileys');
const { Octokit } = require("@octokit/rest");
const fs = require("fs");
const os = require("os");
const path = require("path");
const moment = require("moment-timezone");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const pino = require("pino");
const { execFile } = require("child_process");
const fetch = require("node-fetch");
const { promisify } = require("util");
const chalk = require("chalk");
const mime = require("mime-types");
const figlet = require("figlet");
const { BOT_TOKEN, RAPIDAPI_KEY, TMP_DIR } = require("./config");
const gradient = require("gradient-string");
const crypto = require("crypto");
const { fileURLToPath } = require("url");
const FormData = require("form-data");

const premiumFile = "./DatabaseUser/premiumuser.json";
const adminFile = "./DatabaseUser/adminuser.json";
const ownerFile = "./getsuzoId.json";
const ownerID = 7653566720;

