var assert=require("assert");

function ejercicio1(arr,num){
  var multiplica=0;
  if(Array.isArray(arr)){
    multiplica=arr.reduce(function(total,actual){
      return total*actual
    });
  }else{
    if(!isNaN(arr)){
    multiplica=arr;
    }
  }
  if(!isNaN(num)){
    multiplica*=num;
  }
  return multiplica;
}
describe('Ejercicio 1', function(){
  it('Prueba de [2,3,4] y 5', function(){
    assert.equal(120, ejercicio1([2,3,4], 5));
  });
  it('Prueba de [2,3,4] y "hola"', function(){
    assert.equal(24, ejercicio1([2,3,4], "hola"));
  });
  it('Prueba de [2,3,4] y nada', function(){
    assert.equal(24, ejercicio1([2,3,4]));
  });
  it('Prueba de 2 y 3', function(){
    assert.equal(6, ejercicio1(2,3));
  });
  it('Prueba de 2, 3 y 4', function(){
    assert.equal(6, ejercicio1(2,3,4));
  });
}
