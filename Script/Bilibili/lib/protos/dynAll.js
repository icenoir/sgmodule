// @generated by protobuf-ts 2.9.0 with parameter output_javascript_es2020
// @generated from protobuf file "protos/dynAll.proto" (syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum DynamicType
 */
export var DynamicType;
(function (DynamicType) {
    /**
     * 占位
     *
     * @generated from protobuf enum value: dyn_none = 0;
     */
    DynamicType[DynamicType["dyn_none"] = 0] = "dyn_none";
    /**
     * 转发
     *
     * @generated from protobuf enum value: forward = 1;
     */
    DynamicType[DynamicType["forward"] = 1] = "forward";
    /**
     * 稿件: ugc、小视频、短视频、UGC转PGC
     *
     * @generated from protobuf enum value: av = 2;
     */
    DynamicType[DynamicType["av"] = 2] = "av";
    /**
     * pgc：番剧、PGC番剧、PGC电影、PGC电视剧、PGC国创、PGC纪录片
     *
     * @generated from protobuf enum value: pgc = 3;
     */
    DynamicType[DynamicType["pgc"] = 3] = "pgc";
    /**
     * 付费更新批次
     *
     * @generated from protobuf enum value: courses = 4;
     */
    DynamicType[DynamicType["courses"] = 4] = "courses";
    /**
     * 折叠
     *
     * @generated from protobuf enum value: fold = 5;
     */
    DynamicType[DynamicType["fold"] = 5] = "fold";
    /**
     * 纯文字
     *
     * @generated from protobuf enum value: word = 6;
     */
    DynamicType[DynamicType["word"] = 6] = "word";
    /**
     * 图文
     *
     * @generated from protobuf enum value: draw = 7;
     */
    DynamicType[DynamicType["draw"] = 7] = "draw";
    /**
     * 专栏 原仅phone端
     *
     * @generated from protobuf enum value: article = 8;
     */
    DynamicType[DynamicType["article"] = 8] = "article";
    /**
     * 音频 原仅phone端
     *
     * @generated from protobuf enum value: music = 9;
     */
    DynamicType[DynamicType["music"] = 9] = "music";
    /**
     * 通用卡 方形
     *
     * @generated from protobuf enum value: common_square = 10;
     */
    DynamicType[DynamicType["common_square"] = 10] = "common_square";
    /**
     * 通用卡 竖形
     *
     * @generated from protobuf enum value: common_vertical = 11;
     */
    DynamicType[DynamicType["common_vertical"] = 11] = "common_vertical";
    /**
     * 直播卡 只有转发态
     *
     * @generated from protobuf enum value: live = 12;
     */
    DynamicType[DynamicType["live"] = 12] = "live";
    /**
     * 播单 原仅phone端 只有转发态
     *
     * @generated from protobuf enum value: medialist = 13;
     */
    DynamicType[DynamicType["medialist"] = 13] = "medialist";
    /**
     * 付费更新批次 只有转发态
     *
     * @generated from protobuf enum value: courses_season = 14;
     */
    DynamicType[DynamicType["courses_season"] = 14] = "courses_season";
    /**
     * 广告卡
     *
     * @generated from protobuf enum value: ad = 15;
     */
    DynamicType[DynamicType["ad"] = 15] = "ad";
    /**
     * 小程序卡
     *
     * @generated from protobuf enum value: applet = 16;
     */
    DynamicType[DynamicType["applet"] = 16] = "applet";
    /**
     * 订阅卡
     *
     * @generated from protobuf enum value: subscription = 17;
     */
    DynamicType[DynamicType["subscription"] = 17] = "subscription";
    /**
     * 直播推荐卡
     *
     * @generated from protobuf enum value: live_rcmd = 18;
     */
    DynamicType[DynamicType["live_rcmd"] = 18] = "live_rcmd";
    /**
     * 通栏
     *
     * @generated from protobuf enum value: banner = 19;
     */
    DynamicType[DynamicType["banner"] = 19] = "banner";
    /**
     * 合集卡
     *
     * @generated from protobuf enum value: ugc_season = 20;
     */
    DynamicType[DynamicType["ugc_season"] = 20] = "ugc_season";
    /**
     * 新订阅卡
     *
     * @generated from protobuf enum value: subscription_new = 21;
     */
    DynamicType[DynamicType["subscription_new"] = 21] = "subscription_new";
    /**
     * @generated from protobuf enum value: story = 22;
     */
    DynamicType[DynamicType["story"] = 22] = "story";
    /**
     * @generated from protobuf enum value: topic_rcmd = 23;
     */
    DynamicType[DynamicType["topic_rcmd"] = 23] = "topic_rcmd";
})(DynamicType || (DynamicType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class DynamicItem$Type extends MessageType {
    constructor() {
        super("DynamicItem", [
            { no: 1, name: "card_type", kind: "enum", T: () => ["DynamicType", DynamicType] },
            { no: 2, name: "item_type", kind: "enum", T: () => ["DynamicType", DynamicType] },
            { no: 5, name: "has_fold", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "server_info", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { cardType: 0, itemType: 0, hasFold: 0, serverInfo: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* DynamicType card_type */ 1:
                    message.cardType = reader.int32();
                    break;
                case /* DynamicType item_type */ 2:
                    message.itemType = reader.int32();
                    break;
                case /* int32 has_fold */ 5:
                    message.hasFold = reader.int32();
                    break;
                case /* string server_info */ 6:
                    message.serverInfo = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* DynamicType card_type = 1; */
        if (message.cardType !== 0)
            writer.tag(1, WireType.Varint).int32(message.cardType);
        /* DynamicType item_type = 2; */
        if (message.itemType !== 0)
            writer.tag(2, WireType.Varint).int32(message.itemType);
        /* int32 has_fold = 5; */
        if (message.hasFold !== 0)
            writer.tag(5, WireType.Varint).int32(message.hasFold);
        /* string server_info = 6; */
        if (message.serverInfo !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.serverInfo);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DynamicItem
 */
export const DynamicItem = new DynamicItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DynamicList$Type extends MessageType {
    constructor() {
        super("DynamicList", [
            { no: 1, name: "list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DynamicItem },
            { no: 2, name: "update_num", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "history_offset", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "update_baseline", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "has_more", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { list: [], updateNum: 0n, historyOffset: "", updateBaseline: "", hasMore: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated DynamicItem list */ 1:
                    message.list.push(DynamicItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int64 update_num */ 2:
                    message.updateNum = reader.int64().toBigInt();
                    break;
                case /* string history_offset */ 3:
                    message.historyOffset = reader.string();
                    break;
                case /* string update_baseline */ 4:
                    message.updateBaseline = reader.string();
                    break;
                case /* bool has_more */ 5:
                    message.hasMore = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated DynamicItem list = 1; */
        for (let i = 0; i < message.list.length; i++)
            DynamicItem.internalBinaryWrite(message.list[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* int64 update_num = 2; */
        if (message.updateNum !== 0n)
            writer.tag(2, WireType.Varint).int64(message.updateNum);
        /* string history_offset = 3; */
        if (message.historyOffset !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.historyOffset);
        /* string update_baseline = 4; */
        if (message.updateBaseline !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.updateBaseline);
        /* bool has_more = 5; */
        if (message.hasMore !== false)
            writer.tag(5, WireType.Varint).bool(message.hasMore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DynamicList
 */
export const DynamicList = new DynamicList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TopicList$Type extends MessageType {
    constructor() {
        super("TopicList", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { title: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TopicList
 */
export const TopicList = new TopicList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DynAllReply$Type extends MessageType {
    constructor() {
        super("DynAllReply", [
            { no: 1, name: "dynamic_list", kind: "message", T: () => DynamicList },
            { no: 3, name: "topic_list", kind: "message", T: () => TopicList }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* DynamicList dynamic_list */ 1:
                    message.dynamicList = DynamicList.internalBinaryRead(reader, reader.uint32(), options, message.dynamicList);
                    break;
                case /* TopicList topic_list */ 3:
                    message.topicList = TopicList.internalBinaryRead(reader, reader.uint32(), options, message.topicList);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* DynamicList dynamic_list = 1; */
        if (message.dynamicList)
            DynamicList.internalBinaryWrite(message.dynamicList, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* TopicList topic_list = 3; */
        if (message.topicList)
            TopicList.internalBinaryWrite(message.topicList, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DynAllReply
 */
export const DynAllReply = new DynAllReply$Type();
