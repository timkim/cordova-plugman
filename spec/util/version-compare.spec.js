/*
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var version_compare = require('../../src/util/version-compare');
// if major satisfies, all satisfied
// if major equals, continue to next
// if major not satisfies, fail

// if minor satisfies, all satisfied,
// if minor equal, continue
// if minor not satisfied, fail

// if patch satisfied, all satisfied
// if patch not satisfied, fail

describe('version-compare', function(){
    describe('=', function() {
        it('should satisfy', function(){
            expect(version_compare('0','0')).toBe(true);
            expect(version_compare('0.0','0.0')).toBe(true);
            expect(version_compare('0.0.0','0.0.0')).toBe(true);
            expect(version_compare('0','1')).toBe(false);
            expect(version_compare('0.0','0.1')).toBe(false);
            expect(version_compare('0.0.0','0.0.1')).toBe(false);
        });
        
    });
    describe('<', function() {
        it('should satisfy', function(){
            expect(version_compare('0','<1')).toBe(true);
            expect(version_compare('0','<0')).toBe(false);
            expect(version_compare('1','<0')).toBe(false);
            
            expect(version_compare('0.0','<1.0')).toBe(true);
            expect(version_compare('0.1','<1.0')).toBe(true);
            expect(version_compare('0.1','<0.1')).toBe(false);
            expect(version_compare('0.0','<0.1')).toBe(true);
            expect(version_compare('0.0','<0.0')).toBe(false);
            expect(version_compare('1.0','<1.0')).toBe(false);
            expect(version_compare('1.1','<1.0')).toBe(false);
            expect(version_compare('1.1','<0.1')).toBe(false);
            expect(version_compare('1.0','<0.1')).toBe(false);
            expect(version_compare('1.0','<0.0')).toBe(false);
                       
            expect(version_compare('0.0.0','<1.0.0')).toBe(true);  
            expect(version_compare('0.1.0','<1.0.0')).toBe(true); 
            expect(version_compare('0.0.1','<1.0.0')).toBe(true); 
            expect(version_compare('0.1.1','<1.0.0')).toBe(true); 
            expect(version_compare('0.0.0','<0.1.0')).toBe(true);
            expect(version_compare('0.0.1','<0.1.0')).toBe(true);
            expect(version_compare('0.1.0','<0.2.0')).toBe(true); 
            expect(version_compare('0.0.0','<0.0.1')).toBe(true);            
            expect(version_compare('0.0.0','<0.0.0')).toBe(false); 
            expect(version_compare('1.0.0','<1.0.1')).toBe(true);  
            expect(version_compare('1.1.0','<1.0.1')).toBe(false); 
            expect(version_compare('1.0.1','<1.1.0')).toBe(true); 
            expect(version_compare('1.1.1','<1.0.0')).toBe(false); 
            expect(version_compare('1.0.0','<0.1.0')).toBe(false);
            expect(version_compare('1.0.1','<0.1.0')).toBe(false);
            expect(version_compare('1.1.0','<0.2.0')).toBe(false); 
            expect(version_compare('1.0.0','<0.0.1')).toBe(false);            
            expect(version_compare('1.0.0','<0.0.0')).toBe(false); 
        });
    });
    describe('<=', function() {
        it('should satisfy', function(){
            expect(version_compare('0','<=1')).toBe(true);
            expect(version_compare('0','<=0')).toBe(true);
            expect(version_compare('1','<=0')).toBe(false);
            
            expect(version_compare('0.0','<=1.0')).toBe(true);
            expect(version_compare('0.1','<=1.0')).toBe(true);
            expect(version_compare('0.1','<=0.1')).toBe(true);
            expect(version_compare('0.0','<=0.1')).toBe(true);
            expect(version_compare('0.0','<=0.0')).toBe(true);
            expect(version_compare('1.0','<=1.0')).toBe(true);
            expect(version_compare('1.1','<=1.0')).toBe(false);
            expect(version_compare('1.1','<=0.1')).toBe(false);
            expect(version_compare('1.0','<=0.1')).toBe(false);
            expect(version_compare('1.0','<=0.0')).toBe(false);
                       
            expect(version_compare('0.0.0','<=1.0.0')).toBe(true);  
            expect(version_compare('0.1.0','<=1.0.0')).toBe(true); 
            expect(version_compare('0.0.1','<=1.0.0')).toBe(true); 
            expect(version_compare('0.1.1','<=1.0.0')).toBe(true); 
            expect(version_compare('0.0.0','<=0.1.0')).toBe(true);
            expect(version_compare('0.0.1','<=0.1.0')).toBe(true);
            expect(version_compare('0.1.0','<=0.2.0')).toBe(true); 
            expect(version_compare('0.0.0','<=0.0.1')).toBe(true);            
            expect(version_compare('0.0.0','<=0.0.0')).toBe(true); 
            expect(version_compare('1.0.0','<=1.0.1')).toBe(true);  
            expect(version_compare('1.1.0','<=1.0.1')).toBe(false); 
            expect(version_compare('1.0.1','<=1.1.0')).toBe(true); 
            expect(version_compare('1.1.1','<=1.0.0')).toBe(false); 
            expect(version_compare('1.0.0','<=0.1.0')).toBe(false);
            expect(version_compare('1.0.1','<=0.1.0')).toBe(false);
            expect(version_compare('1.1.0','<=0.2.0')).toBe(false); 
            expect(version_compare('1.0.0','<=0.0.1')).toBe(false);            
            expect(version_compare('1.0.0','<=0.0.0')).toBe(false);             
        });
    });

    describe('>', function() {
        it('should satisfy', function(){
            expect(version_compare('0','>1')).toBe(false);
            expect(version_compare('0','>0')).toBe(false);
            expect(version_compare('1','>0')).toBe(true);
            
            expect(version_compare('0.0','>1.0')).toBe(false);
            expect(version_compare('0.1','>1.0')).toBe(false);
            expect(version_compare('0.1','>0.1')).toBe(false);
            expect(version_compare('0.0','>0.1')).toBe(false);
            expect(version_compare('0.0','>0.0')).toBe(false);
            expect(version_compare('1.0','>1.0')).toBe(false);
            expect(version_compare('1.1','>1.0')).toBe(true);
            expect(version_compare('1.1','>0.1')).toBe(true);
            expect(version_compare('1.0','>0.1')).toBe(true);
            expect(version_compare('1.0','>0.0')).toBe(true);
                       
            expect(version_compare('0.0.0','>1.0.0')).toBe(false);  
            expect(version_compare('0.1.0','>1.0.0')).toBe(false); 
            expect(version_compare('0.0.1','>1.0.0')).toBe(false); 
            expect(version_compare('0.1.1','>1.0.0')).toBe(false); 
            expect(version_compare('0.0.0','>0.1.0')).toBe(false);
            expect(version_compare('0.0.1','>0.1.0')).toBe(false);
            expect(version_compare('0.1.0','>0.2.0')).toBe(false); 
            expect(version_compare('0.0.0','>0.0.1')).toBe(false);            
            expect(version_compare('0.0.0','>0.0.0')).toBe(false); 
            expect(version_compare('1.0.0','>1.0.1')).toBe(false);  
            expect(version_compare('1.1.0','>1.0.1')).toBe(false); 
            expect(version_compare('1.0.1','>1.1.0')).toBe(true); 
            expect(version_compare('1.1.1','>1.0.0')).toBe(false); 
            expect(version_compare('1.0.0','>0.1.0')).toBe(false);
            expect(version_compare('1.0.1','>0.1.0')).toBe(false);
            expect(version_compare('1.1.0','>0.2.0')).toBe(false); 
            expect(version_compare('1.0.0','>0.0.1')).toBe(false);            
            expect(version_compare('1.0.0','>0.0.0')).toBe(false);             
        });
    });
    describe('>=', function() {
       it('should work with major only', function(){
            expect(version_compare('17','>=18')).toBe(false);
       });
       it('should work with major and minor', function(){
            expect(version_compare('17.1','>=18.0')).toBe(false);
       });
       it('should work with major, minor and patch', function(){
            expect(version_compare('17.1.2','>=18.0.1')).toBe(false);
       });
       it('should work with major only', function(){
            expect(version_compare('19','>=18')).toBe(true);
       });
       it('should work with major and minor', function(){
            expect(version_compare('19.1','>=18.2')).toBe(true);
       });
       it('should work with major, minor and patch', function(){
            expect(version_compare('19.1.2','>=18.2.3')).toBe(true);
       });
    });

});
