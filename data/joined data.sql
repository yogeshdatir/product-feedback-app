-- SELECT F.ID,
-- 	F.TITLE,
-- 	F.DESCRIPTION,
-- 	F.UPVOTES,
-- 	S.NAME AS STATUSNAME,
-- 	CT.NAME AS CATEGORYNAME,
-- 	COALESCE(COUNT(RPCM.ID),
-- 		0) AS COMMENTCOUNT,
-- 	COALESCE(SUM(RPCM.RS),
-- 		0) AS REPLIESCOUNT
-- FROM FEEDBACKS F
-- LEFT JOIN STATUS S ON F.STATUS = S.ID
-- LEFT JOIN CATEGORIES CT ON F.CATEGORY = CT.ID
-- LEFT JOIN
-- 	(SELECT CM.ID,
-- 			"cm"."parentFeedback",
-- 			COUNT(RP.ID) AS RS
-- 		FROM COMMENTS CM
-- 		LEFT JOIN REPLIES RP ON "rp"."parentComment" = CM.ID
-- 		GROUP BY CM.ID) RPCM ON "rpcm"."parentFeedback" = F.ID
-- GROUP BY F.ID,
-- 	S.ID,
-- 	CT.ID;

SELECT CM.ID,
	CM.CONTENT,
	U.NAME AS "authorName",
	U.USERNAME AS "authorUsername",
	U.IMAGE AS "authorImage"
FROM COMMENTS CM
LEFT JOIN USERS U ON CM.USER = U.ID
WHERE "parentFeedback" = 'ce684d50-7ee2-4fdb-9459-3e494475c6e5';


SELECT RP.ID,
	RP.CONTENT,
	"rp"."parentComment",
	"rp"."replyingTo",
	RP.USER,
	U.NAME AS "authorName",
	U.USERNAME AS "authorUsername",
	U.IMAGE AS "authorImage",
	RPU.NAME AS "replyingToName",
	RPU.USERNAME AS "replyingToUsername",
	RPU.IMAGE AS "replyingToImage"
FROM REPLIES RP
LEFT JOIN COMMENTS CM ON CM.ID = "rp"."parentComment"
LEFT JOIN USERS U ON RP.USER = U.ID
LEFT JOIN USERS RPU ON "rp"."replyingTo" = RPU.ID
WHERE "cm"."parentFeedback" = 'ce684d50-7ee2-4fdb-9459-3e494475c6e5';