import express from 'express';
const router = express.Router()
import facts from '../functions/sfw/fun/facts.js';
import question from '../functions/sfw/fun/question.js';
import truth from '../functions/sfw/fun/truth.js';
import dare from '../functions/sfw/fun/dare.js';
import facebook from '../functions/sfw/converters/facebook.js';
import instagram from '../functions/sfw/converters/instagram.js';
import {screenshot} from '../functions/sfw/converters/screenshot.js';
import tiktok from '../functions/sfw/converters/tiktok.js';
import {ytVideo,ytAudio} from '../functions/sfw/converters/youtube.js';

router.route("/fun/fact").get(facts)
router.route("/fun/question").get(question)
router.route("/fun/truth").get(truth)
router.route("/fun/dare").get(dare)


router.route("/converters/facebook").get(facebook)
router.route("/converters/instagram").get(instagram)
router.route("/converters/screenshot/").get(screenshot)
router.route("/converters/tiktok/").get(tiktok)
router.route("/converters/youtube/video").get(ytVideo)
router.route("/converters/youtube/audio").get(ytAudio)

export default router