options( digits = 16 )
library( jsonlite )

alpha = 9
beta = 1
x = c( -2.5, 0, 2.5, 5, 10 )
y = pgamma( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
