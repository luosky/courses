db.baby_stats.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: {
			    "from" : "babies",
			    "localField" : "value.bid",
			    "foreignField" : "_id",
			    "as" : "baby"
			}
		},

		// Stage 2
		{
			$unwind: {
			    path : "$baby"
			}
		},

		// Stage 3
		{
			$replaceRoot: {
			    newRoot: {
			      _id : "$_id",
			      sections : "$value.sections",
			      sublessons: "$value.sublessons",
			      bd: "$baby.bd"
			    }
			}
		},

		// Stage 4
		{
			$out: "baby_stats"
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
