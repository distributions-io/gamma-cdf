options( digits = 16 )
library( jsonlite )

alpha = 13
beta = 7
x = seq( -1, 1000, 0.5 )
y = pgamma( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
